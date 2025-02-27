import { createConnection } from "@/lib/db";
import { v4 } from "uuid";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const uuid = v4();
    console.log("Generated UUID:", uuid);

    const connection = await createConnection();

    console.log("Checking if email already exists:", email);

    const [rows] = await connection.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (rows.length > 0) {
      return NextResponse.json(
        { message: "Пользователь с таким email уже существует" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("Inserting new user into the database");

    await connection.execute(
      "INSERT INTO users (uuid, name, email, password, balance) VALUES (?, ?, ?, ?, ?)",
      [uuid, name, email, hashedPassword, 0]
    );

    return NextResponse.json(
      { message: "User registered successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Ошибка при регистрации:", error);
    return NextResponse.json(
      {
        message: "Не удалось зарегистрировать пользователя",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
