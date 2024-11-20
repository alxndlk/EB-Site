import connectMongoDB from "@/lib";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    await connectMongoDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "Пользователь с таким email уже существует" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role: 'default',
      balance: 49.99
    });

    console.log("Новый пользователь создан:", newUser);

    return NextResponse.json({ message: "User registered successfully." }, { status: 201 });
  } catch (error) {
    console.error("Ошибка при регистрации:", error);
    return NextResponse.json(
      { message: "Не удалось зарегистрировать пользователя" },
      { status: 500 }
    );
  }
}
