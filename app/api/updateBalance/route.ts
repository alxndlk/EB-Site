import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/user";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    const body = await req.json();
    const { amount, email } = body;

    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Неавторизованный доступ" },
        { status: 401 }
      );
    }

    await connectMongoDB();
    const result = await User.findOneAndUpdate(
      { email: email },
      { $inc: { balance: amount } },
      { new: true, upsert: true }
    );

    if (!result) {
      return NextResponse.json(
        { error: "Ошибка при обновлении данных" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Баланс успешно обнолен" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Ошибка при обновлении скина:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
