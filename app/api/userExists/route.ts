import { query } from "@/lib/db";
import { v4 as uuidv4 } from "uuid";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Заполните все поля" },
        { status: 400 }
      );
    }

    console.log("Checking if email or username exists");

    const [{ count }] = await query(
      "SELECT COUNT(*) AS count FROM users WHERE email = ? OR username = ?",
      [email, name]
    );

    if (count > 0) {
      return NextResponse.json(
        { message: "Пользователь с таким email или именем уже существует" },
        { status: 400 }
      );
    }

    const uuid = uuidv4();
    console.log(`Generated UUID: ${uuid}`);

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("Inserting new user into the database");

    await query(
      "INSERT INTO users (uuid, username, email, password, balance) VALUES (?, ?, ?, ?, ?)",
      [uuid, name, email, hashedPassword, 0]
    );

    return NextResponse.json(
      { message: "Пользователь успешно зарегистрирован" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Ошибка при регистрации:", error);
    return NextResponse.json(
      { message: "Не удалось зарегистрировать пользователя" },
      { status: 500 }
    );
  }
}
