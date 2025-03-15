import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { query } from "@/lib/db";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json(
        { error: "Неавторизованный доступ" },
        { status: 401 }
      );
    }

    const { amount, paymentMethodId, email, userName } = await req.json();
    if (!amount || !paymentMethodId || !email || !userName) {
      return NextResponse.json(
        { error: "Некорректные данные" },
        { status: 400 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount), // в долларах
      currency: "usd",
      payment_method: paymentMethodId,
      confirm: true,
      receipt_email: email,
      return_url: "https://epohablokov.com/profile",
    });

    if (paymentIntent.status === "requires_action") {
      return NextResponse.json(
        { requires_action: true, next_action: paymentIntent.next_action },
        { status: 200 }
      );
    }

    if (paymentIntent.status !== "succeeded") {
      return NextResponse.json(
        {
          error: "Платеж не прошел",
          status: paymentIntent.status,
          last_payment_error: paymentIntent.last_payment_error?.message,
        },
        { status: 400 }
      );
    }

    const UPDATED_USER_BALANCE: number = Number(amount * 85);

    const result = await query(
      "UPDATE users SET balance = balance + ? WHERE username = ?",
      [UPDATED_USER_BALANCE, userName]
    );
    if (result.affectedRows === 0) {
      return NextResponse.json(
        { error: "Ошибка при обновлении данных пользователя" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, paymentIntent });
  } catch (error: any) {
    console.error("Ошибка сервера:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера", details: error.message },
      { status: 500 }
    );
  }
}
