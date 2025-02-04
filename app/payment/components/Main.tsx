"use client";

import { useSession } from "next-auth/react";
import React, { useState } from "react";
import styles from "./Main.module.css";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import StatusBar from "@/app/ui/StatusBar";
import { useRouter } from "next/navigation";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

const PaymentForm = ({ value, session, name }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState<{
    text: string | null;
    type: "success" | "error" | null;
  }>({
    text: null,
    type: null,
  });

  const router = useRouter();

  const handleUpdateBalance = async () => {
    setMessage({ text: "", type: "error" });

    if (!stripe || !elements) {
      setMessage({
        text: "Ошибка при инициализации платежной системы",
        type: "error",
      });
      return;
    }

    if (!session?.user?.email) {
      setMessage({ text: "Необходимо авторизоваться", type: "error" });
      return;
    }

    if (!name) {
      setMessage({ text: "Введите никнейм", type: "error" });
      return;
    }

    if (Number(value) < 1) {
      setMessage({ text: "Минимальная сумма пополнения 1$", type: "error" });
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setMessage({ text: "Данные карты не найдены", type: "error" });
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setMessage({ text: "Некорректные данные карты", type: "error" });
      return;
    }

    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: Number(value),
          email: session?.user?.email,
          paymentMethodId: paymentMethod.id,
          userName: name,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setMessage({ text: "Оплата прошла успешно", type: "success" });
        setTimeout(() => {
          router.push("/profile");
        }, 2000);
      } else {
        setMessage({ text: "Ошибка при обработке платежа", type: "error" });
      }
    } catch (error) {
      setMessage({ text: "Сервер недоступен", type: "error" });
    }
  };

  return (
    <>
      {message && (
        <StatusBar
          message={message.text}
          type={message.type}
          onClose={() => setMessage(null)}
        />
      )}
      <CardElement
        className={styles.card}
        options={{
          style: {
            base: { fontSize: "16px", color: "#fff" },
            invalid: { color: "red" },
          },
        }}
      />

      <p className={styles.pay_paragraph}>
        Можно написать ник другого игрока — тогда покупка придёт к нему на
        аккаунт. Поздравь и порадуй друга или подругу :)
      </p>

      <button className={styles.button} onClick={handleUpdateBalance}>
        Продолжить
      </button>
    </>
  );
};

export const Main = () => {
  const { data: session } = useSession();
  const [value, setValue] = useState("200");
  const [name, setName] = useState(session?.user?.name || "");
  const [error, setError] = useState<string | null>(null);

  const validateForm = () => {
    setError(null);
    if (Number(value) < 65) {
      setError("Ошибка: Минимальная сумма пополнения 1$");
      return false;
    }
    if (!name) {
      setError("Ошибка: Введите никнейм");
      return false;
    }
    return true;
  };

  return (
    <div className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.title}>
          <h4>Пополнить баланс</h4>
          <p>
            Все ваши платежи надежно защищены благодаря современным технологиям
            безопасности
          </p>
        </div>

        <div className={styles.content}>
          {error && <StatusBar message={error} type={"error"} />}

          <div className={styles.container}>
            <div className={styles.title_container}>
              <h4>Введите ник</h4>
            </div>
            <div className={styles.info}>
              <div className={styles.inputs}>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ник игрока"
                />
                <p>
                  Транзакция происходит в рублях. Украинские карты не принимают
                  платеж. Попробуйте через карты Relovut или другие.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.title_container}>
              <h4>Выберите сумму</h4>
            </div>
            <div className={styles.values}>
              <div className={styles.value}>
                {[2.5, 5, 10, 25, 50].map((amount) => (
                  <button key={amount} onClick={() => setValue(String(amount))}>
                    {amount} $
                  </button>
                ))}
              </div>
              <div className={styles.finish}>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Не менее 1 $"
                />
              </div>
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.title_container}>
              <h4>Оплата</h4>
            </div>
            <div className={styles.pay}>
              <Elements stripe={stripePromise}>
                <PaymentForm value={value} session={session} name={name} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.radial}></div>
      <div className={styles.line}></div>
    </div>
  );
};
