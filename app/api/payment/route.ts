import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { connectMongoDB } from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/user";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
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
        currency: "rub",
        payment_method: paymentMethodId,
        confirm: true,
        receipt_email: email,
        return_url: "https://epohablokov/",
      });
    } catch (stripeError: any) {
      console.error("Ошибка Stripe:", stripeError);
      return NextResponse.json(
        { error: stripeError.message || "Ошибка при обработке платежа" },
        { status: 400 }
      );
    }

    // Логирование деталей платежа
    console.log("Статус платежа:", paymentIntent.status);

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

    await connectMongoDB();
    const result = await User.findOneAndUpdate(
      { name: userName },
      { $inc: { balance: amount } },
      { new: true, upsert: true }
    );

    if (!result) {
      return NextResponse.json(
        { error: "Ошибка при обновлении данных" },
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
