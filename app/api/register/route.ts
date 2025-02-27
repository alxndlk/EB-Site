import { query } from "@/lib/db";
import { v4 } from "uuid";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    const uuid = v4();

    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "Unknown";

    const rows: any[] = await query("SELECT email FROM users WHERE email = ?", [
      email,
    ]);

    if (rows.length > 0) {
      return NextResponse.json(
        { message: "Пользователь с таким email уже существует" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await query(
      "INSERT INTO users (uuid, username, email, password, balance, created_at, created_ip) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        uuid,
        name,
        email,
        hashedPassword,
        0,
        new Date().toISOString().slice(0, 19).replace("T", " "),
        ip,
      ]
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
