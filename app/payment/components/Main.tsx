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
import { ArrowRight, CheckIcon } from "lucide-react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

const PaymentForm = ({ value, session, name }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<{
    text: string | null;
    status: number | null;
  }>({
    text: null,
    status: null,
  });

  const [success, setSuccess] = useState<{
    text: string | null;
    status: number | null;
  }>({
    text: null,
    status: null,
  });

  const [warning, setWarning] = useState<{
    text: string | null;
    status: number | null;
  }>({
    text: null,
    status: null,
  });

  const handleResetErrors = () => {
    setError({ text: null, status: null });
  };

  const handleUpdateBalance = async () => {
    setError({ text: null, status: null });

    if (!stripe || !elements) {
      setError({
        text: "Ошибка при инициализации платежной системы",
        status: 500,
      });
      return;
    }

    // if (!session?.user?.email) {
    //   setError({ text: "Необходимо авторизоваться"});
    //   return;
    // }

    if (!name) {
      setError({ text: "Введите никнейм", status: 400 });
      return;
    }

    if (Number(value) === 0) {
      setError({ text: "Минимальная сумма пополнения 1$", status: 400 });
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setError({ text: "Данные карты не найдены", status: 400 });
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setError({ text: "Некорректные данные карты", status: 400 });
      return;
    }

    console.log(Number(value));

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
        setSuccess({ text: "Оплата прошла успешно", status: 200 });
      } else if (!result.success) {
        setError({ text: result.error, status: 500 });
      } else if (result.requires_action) {
        setWarning({
          text: "Необходима дополнительная проверка платежа",
          status: 300,
        });
      } else {
        setError({ text: "Ошибка при обработке платежа", status: 500 });
      }
    } catch (error) {
      setError({ text: "Сервер недоступен", status: 500 });
    }
  };

  return (
    <>
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
        Транзакция происходит в долларах. Некоторые карты могут не принимать эти
        платежи или будут требовать подтверждение. В случае ошибки, пишите в
        поддержку.
      </p>

      {error.text && (
        <div
          className={`${styles.button} ${styles.error_button}`}
          onClick={handleResetErrors}
        >
          <span>Ошибка</span>
          <p>{error.text}</p>
        </div>
      )}

      {!error.text && !warning.text && !success.text && (
        <div className={styles.button} onClick={handleUpdateBalance}>
          <span>Продолжить</span>
          <ArrowRight className={styles.ArrowRight} />
        </div>
      )}

      {warning.text && (
        <div className={`${styles.button} ${styles.warning_button}`}>
          <span>Ожидание подтверждения</span>
          <ArrowRight className={styles.ArrowRight} />
        </div>
      )}

      {success.text && (
        <div className={`${styles.button} ${styles.warning_button}`}>
          <span>Платеж прошел успешно</span>
          <CheckIcon className={styles.ArrowRight} />
        </div>
      )}
    </>
  );
};

export const Main = () => {
  const { data: session } = useSession();
  const [value, setValue] = useState("2.5");
  const [name, setName] = useState(session?.user?.name || "");
  const [error, setError] = useState<string | null>(null);

  const validateForm = () => {
    setError(null);
    if (Number(value) < 1) {
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
        <div className={styles.holder_content}>
          <div className={styles.title}>
            <h4>Пополнить баланс</h4>
            <p>
              Все ваши платежи надежно защищены благодаря современным
              технологиям безопасности
            </p>
          </div>

          <div className={styles.content}>
            <div className={styles.container}>
              <div className={styles.title_container}>
                <h4>1. Введите ник</h4>
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
                    Можно написать ник другого игрока — тогда покупка придёт к
                    нему на аккаунт. Поздравь и порадуй друга или подругу :)
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.container}>
              <div className={styles.title_container}>
                <h4>2. Выберите сумму</h4>
              </div>
              <div className={styles.values}>
                <div className={styles.value}>
                  {[2.5, 5, 10, 25, 50].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setValue(String(amount))}
                    >
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
                  <div className={styles.dollar}>$</div>
                </div>
              </div>
            </div>

            <div className={styles.container}>
              <div className={styles.title_container}>
                <h4>3. Оплата</h4>
              </div>
              <div className={styles.pay}>
                <Elements stripe={stripePromise}>
                  <PaymentForm value={value} session={session} name={name} />
                </Elements>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.radial}></div>
      <div className={styles.line}></div>
    </div>
  );
};
