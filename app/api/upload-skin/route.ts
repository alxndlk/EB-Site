/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Неавторизованный доступ" },
        { status: 401 }
      );
    }

    await connectMongoDB();

    const { skin } = await req.json();

    if (!skin || typeof skin !== "string") {
      return NextResponse.json(
        { error: "Скин не предоставлен или имеет неверный формат" },
        { status: 400 }
      );
    }

    const result = await User.findOneAndUpdate(
      { email: session.user.email },
      { $set: { skin } },
      { new: true, upsert: true }
    );

    if (!result) {
      return NextResponse.json(
        { error: "Ошибка при обновлении данных" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Скин успешно загружен!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Ошибка при загрузке скина:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
