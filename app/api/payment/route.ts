import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createConnection } from "@/lib/db";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Неавторизованный доступ" },
        { status: 401 }
      );
    }

    const { amount, paymentMethodId, email, userName } = await req.json();

    let paymentIntent;
    try {
      paymentIntent = await stripe.paymentIntents.create({
        amount: Number(amount) * 100,
        currency: "usd",
        payment_method: paymentMethodId,
        confirm: true,
        receipt_email: email,
        return_url: "https://epohablokov.com/profile",
      });
    } catch (stripeError: any) {
      console.error("Ошибка Stripe:", stripeError);
      return NextResponse.json(
        { error: stripeError.message || "Ошибка при обработке платежа" },
        { status: 400 }
      );
    }

    console.log("Статус платежа:", paymentIntent.status);

    if (paymentIntent.status === "requires_action") {
      return NextResponse.json(
        {
          requires_action: true,
          next_action: paymentIntent.next_action,
        },
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

    const connection = await createConnection();

    const [rows]: any[] = await connection.execute(
      "UPDATE users SET balance = balance + ? WHERE username = ?",
      [amount, userName]
    );

    if (rows.affectedRows === 0) {
      return NextResponse.json(
        { error: "Ошибка при обновлении данных пользователя" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, paymentIntent });
  } catch (error) {
    console.error("Ошибка сервера:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
