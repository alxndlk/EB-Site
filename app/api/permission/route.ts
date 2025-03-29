import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Rcon } from "rcon-client";

const ALLOWED_ORIGIN = "https://epohablokov.com";
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

async function checkPlayerOnline(user_name: string): Promise<boolean> {
  const rcon = new Rcon({
    host: process.env.RCON_HOST,
    port: Number(process.env.RCON_PORT),
    password: process.env.RCON_PASSWORD,
  });

  try {
    await rcon.connect();
    const listResult = await rcon.send("list");
    await rcon.end();

    return listResult.toLowerCase().includes(user_name.toLowerCase());
  } catch (err) {
    console.error("Ошибка при проверке онлайн-статуса игрока:", err);
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const origin = req.headers.get("origin") || req.headers.get("referer");
    if (!origin || !origin.startsWith(ALLOWED_ORIGIN)) {
      console.warn("Попытка запроса с недопустимого источника:", origin);
      return NextResponse.json({ error: "Запрос отклонен" }, { status: 403 });
    }

    const isServerAvailable = await checkServerAvailability();
    if (!isServerAvailable) {
      return NextResponse.json(
        { error: "Сервер на данный момент выключен." },
        { status: 503 }
      );
    }

    // Проверка токена авторизации
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Неавторизованный доступ" },
        { status: 401 }
      );
    }

    // Получение сессии пользователя
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Неавторизованный доступ" },
        { status: 401 }
      );
    }

    const {
      permission_price,
      user_uuid,
      user_name,
      permission_name,
      permission_duration,
      server,
    } = await req.json();

    if (
      !permission_price ||
      !user_uuid ||
      !user_name ||
      !permission_name ||
      !permission_duration
    ) {
      return NextResponse.json(
        { error: "Некорректные параметры запроса" },
        { status: 400 }
      );
    }

    const isPlayerOnline = await checkPlayerOnline(user_name);
    if (!isPlayerOnline) {
      return NextResponse.json(
        { error: "Игрок не найден на сервере" },
        { status: 400 }
      );
    }

    const UUID_BALANCE = await query(
      "SELECT balance FROM users WHERE uuid = ?",
      [user_uuid]
    );

    if (UUID_BALANCE.length === 0) {
      return NextResponse.json(
        { error: "Пользователь не найден" },
        { status: 404 }
      );
    }

    const CURRENT_USER_BALANCE = UUID_BALANCE[0].balance;
    if (CURRENT_USER_BALANCE < permission_price) {
      return NextResponse.json(
        { error: "Недостаточно средств на балансе" },
        { status: 400 }
      );
    }

    const UPDATE_BALANCE = await query(
      "UPDATE users SET balance = balance - ? WHERE uuid = ?",
      [permission_price, user_uuid]
    );

    if (UPDATE_BALANCE.affectedRows === 0) {
      return NextResponse.json(
        { error: "Ошибка при обновлении данных" },
        { status: 500 }
      );
    }

    const rcon = new Rcon({
      host: process.env.RCON_HOST,
      port: Number(process.env.RCON_PORT),
      password: process.env.RCON_PASSWORD,
    });

    await rcon.connect();
    await rcon.send(
      `lp user ${user_name} parent addtemp ${permission_name} ${permission_duration}d`
    );
    await rcon.send(
      `tell ${user_name} &aСпасибо за покупку! Ваша роль ${permission_name} активирована на ${permission_duration} дней.`
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
