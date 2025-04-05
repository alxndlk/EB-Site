import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
  const uuid = uuidv4();

  try {
    const data = await req.json();
    console.log("Полученные данные:", data);

    if (!data.amount || isNaN(Number(data.amount.value))) {
      return NextResponse.json(
        { error: "Некорректное значение amount" },
        { status: 400 }
      );
    }

    const response = await fetch("https://tome.ge/api/v1/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(
          `${process.env.TOME_KEY}:${process.env.TOME_SECRET_KEY}`
        ).toString("base64")}`,
        "Idempotency-Key": uuid,
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Ответ от Tome:", result);

    if (
      response.ok &&
      result.status === "pending" &&
      result.confirmation?.confirmation_url
    ) {
      return NextResponse.json({
        confirmation_url: result.confirmation.confirmation_url,
      });
    } else {
      return NextResponse.json(
        { error: result.message || "Ошибка при создании платежа" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Ошибка сервера:", error);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
