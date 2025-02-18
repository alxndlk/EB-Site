import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
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
    host: "65.21.216.251",
    port: 25842,
    password: "1234",
  });
  try {
    await rcon.connect();
    const listResult = await rcon.send("list");
    await rcon.end();

    if (listResult.toLowerCase().includes(userName.toLowerCase())) {
      return true;
    } else {
      return false;
    }
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

    await connectMongoDB();

    const {
      status,
      userName,
      amount,
      daysToBuy,
      RCON_HOST,
      RCON_RORT,
      RCON_PASSSWORD,
    } = await req.json();

    const isPlayerOnline = await checkPlayerOnline(userName);
    if (!isPlayerOnline) {
      return NextResponse.json(
        { error: "Игрок не найден на сервере" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ name: userName });

    if (!user) {
      return NextResponse.json(
        { error: "Пользователь не найден" },
        { status: 404 }
      );
    }

    if (user.balance < amount) {
      return NextResponse.json(
        { error: "Недостаточно средств на балансе" },
        { status: 400 }
      );
    }

    const currentRole = user.role || "default";

    const currentDate = new Date();
    let expirationDate: Date;

    if (user.role === status && user.roleExpiresAt) {
      expirationDate = new Date(user.roleExpiresAt);
      expirationDate.setDate(expirationDate.getDate() + daysToBuy);
    } else {
      expirationDate = new Date();
      expirationDate.setDate(currentDate.getDate() + daysToBuy);
    }

    const result = await User.findOneAndUpdate(
      { name: userName },
      {
        $set: { role: status, roleExpiresAt: expirationDate },
        $inc: { balance: -amount },
      },
      { new: true, upsert: true }
    );

    if (result) {
      // Выполняем дополнительные действия через RCON, если пользователь успешно обновлён
      const rcon = new Rcon({
        host: process.env.RCON_HOST,
        port: Number(process.env.RCON_PORT),
        password: process.env.RCON_PASSWORD,
      });

      await rcon.connect();
      await rcon.send(`lp user ${userName} parent set ${status}`);
      await rcon.send(
        `msg ${userName} Спасибо за покупку! Ваша роль ${status} активирована на ${daysToBuy} дней.`
      );
      await rcon.end();
    }

    if (!result) {
      return NextResponse.json(
        { error: "Ошибка при обновлении данных" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Статус успешно установлен!", code: expirationDate },
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
