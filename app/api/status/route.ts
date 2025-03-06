import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Rcon } from "rcon-client";

const rolesHierarchy: Record<string, number> = {
  default: 0,
  Vip: 1,
  Premium: 2,
  Deluxe: 3,
  ULTRA: 4,
  LEGEND: 5,
};

async function checkServerAvailability() {
  const rcon = new Rcon({
    host: process.env.RCON_HOST,
    port: Number(process.env.RCON_PORT),
    password: process.env.RCON_PASSWORD,
  });

  try {
    await rcon.connect();
    await rcon.send("ping");
    await rcon.end();
    return true;
  } catch (err) {
    console.error("Не удалось подключиться к серверу RCON:", err);
    return false;
  }
}

async function checkPlayerOnline(userName: string): Promise<boolean> {
  const rcon = new Rcon({
    host: process.env.RCON_HOST,
    port: Number(process.env.RCON_PORT),
    password: process.env.RCON_PASSWORD,
  });

  try {
    await rcon.connect();
    const listResult = await rcon.send("list");
    await rcon.end();

    return listResult.toLowerCase().includes(userName.toLowerCase());
  } catch (err) {
    console.error("Ошибка при проверке онлайн-статуса игрока:", err);
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const isServerAvailable = await checkServerAvailability();
    if (!isServerAvailable) {
      return NextResponse.json(
        { error: "Сервер на данный момент выключен." },
        { status: 503 }
      );
    }

    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Неавторизованный доступ" },
        { status: 401 }
      );
    }

    const { status, userName, amount, daysToBuy } = await req.json();

    const isPlayerOnline = await checkPlayerOnline(userName);
    if (!isPlayerOnline) {
      return NextResponse.json(
        { error: "Игрок не найден на сервере" },
        { status: 400 }
      );
    }

    const userResult = await query(
      "SELECT balance FROM users WHERE username = ?",
      [userName]
    );
    if (userResult.length === 0) {
      return NextResponse.json(
        { error: "Пользователь не найден" },
        { status: 404 }
      );
    }

    const userBalance = userResult[0].balance;

    if (userBalance < amount) {
      return NextResponse.json(
        { error: "Недостаточно средств на балансе" },
        { status: 400 }
      );
    }

    const updateResult = await query(
      "UPDATE users SET balance = balance - ? WHERE username = ?",
      [amount, userName]
    );

    if (updateResult.affectedRows === 0) {
      return NextResponse.json(
        { error: "Ошибка при обновлении данных" },
        { status: 500 }
      );
    }

    // Отправляем команду в RCON
    const rcon = new Rcon({
      host: process.env.RCON_HOST,
      port: Number(process.env.RCON_PORT),
      password: process.env.RCON_PASSWORD,
    });

    await rcon.connect();
    await rcon.send(
      `lp user ${userName} parent addtemp ${status} ${daysToBuy}d`
    );
    await rcon.send(
      `tell ${userName} &aСпасибо за покупку! Ваша роль ${status} активирована на ${daysToBuy} дней.`
    );
    await rcon.end();

    return NextResponse.json(
      { message: "Статус успешно установлен!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Ошибка при обработке запроса:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
