"use client";

import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Mail, User, Wallet } from "lucide-react";
import Link from "next/link";
import { useUserData } from "@/hooks/useUserData";
import { useSession } from "next-auth/react";
import { Currency } from "@/app/ui/currency";
import { useRouter } from "next/navigation";
import { Method } from "./SelectMethod/Method";
import { v4 } from "uuid";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

const PaymentForm = ({ value, session, name, paymentType }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [message, setMessage] = useState<{
    text: string | null;
    type: "success" | "error" | null;
  }>({ text: null, type: null });

  const isDisabled =
    !isChecked ||
    !name.trim() ||
    !session?.user?.email ||
    parseFloat(value) < 100;

  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const PAYMENT_AMOUNT = Number((parseFloat(value) / 85).toFixed(2));
  const PAYMENT_RUB_CURRENCY = "123.00";

  const handlePayment = async () => {
    setMessage({ text: null, type: null });

    if (isDisabled) return;

    const cardElement = elements.getElement(CardElement);
    if (!cardElement)
      return setMessage({ text: "Ошибка карты", type: "error" });

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error)
      return setMessage({ text: "Некорректные данные карты", type: "error" });

    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: PAYMENT_AMOUNT,
          email: session.user.email,
          paymentMethodId: paymentMethod.id,
          userName: name,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setMessage({ text: "Оплата успешна", type: "success" });
        setTimeout(() => router.push("/profile"), 2000);
      } else {
        setMessage({
          text: result.error || "Ошибка при обработке платежа",
          type: "error",
        });
      }
    } catch {
      setMessage({ text: "Сервер недоступен", type: "error" });
    }
  };

  const handlePaymentRUB = async () => {
    setMessage({ text: null, type: null });

    const uuid = v4();
    console.log("UUID:", uuid);

    if (isDisabled) return;

    const paymentData = {
      amount: {
        value: "10.00",
        currency: "RUB",
      },
      customer: {
        id: uuid,
        settlement_method: "card",
      },
      confirmation: {
        type: "redirect",
        return_url: "https://epohablokov.com/profile",
      },
      description: `Покупка игровой валюты на проекте "Эпоха Блоков" на сумму 123.00 RUB`,
      metadata: {
        order_id: uuid,
      },
    };

    try {
      const response = await fetch("/api/paymentRUB", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      const result = await response.json();
      console.log("Ответ от API:", result);

      if (result.status === "pending") {
        setMessage({
          text: "Платеж успешно создан. Перенаправляем на страницу оплаты...",
          type: "success",
        });

        window.location.href = result.confirmation_url;
      } else {
        setMessage({
          text: `Ошибка: ${result.error?.message || "Неизвестная ошибка"}`,
          type: "error",
        });
      }
    } catch (error) {
      console.error("Ошибка запроса:", error);
      setMessage({ text: "Ошибка сервера", type: "error" });
    }
  };

  return (
    <>
      {paymentType.type != null && paymentType.type != "Рубли" && (
        <CardElement
          className={styles.card}
          options={{
            style: {
              base: { fontSize: "16px", color: "#fff" },
              invalid: { color: "red" },
            },
          }}
        />
      )}

      <div className={styles.checkbox}>
        <input
          type="checkbox"
          className={styles.checkbox_button}
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <span className={styles.accept}>
          Я соглашаюсь с<Link href="/rules">правилами сервера</Link>
        </span>
      </div>
      {paymentType.type === "Рубли" ? (
        <button
          className={`${styles.button} ${isDisabled ? styles.disable : ""}`}
          onClick={handlePaymentRUB}
          disabled={isDisabled}
        >
          ПЕРЕЙТИ К ОПЛАТЕ В РУБЛЯХ
        </button>
      ) : message.text ? (
        <button
          className={`${styles.button} ${styles.disable}`}
          onClick={() => setMessage({ text: null, type: null })}
          disabled={isDisabled}
        >
          {message.text}
        </button>
      ) : (
        <button
          className={`${styles.button} ${isDisabled ? styles.disable : ""}`}
          onClick={handlePayment}
          disabled={isDisabled}
        >
          ПЕРЕЙТИ К ОПЛАТЕ
        </button>
      )}
    </>
  );
};

export const Main = () => {
  const { userData } = useUserData();
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [value, setValue] = useState(null);

  const [paymentType, setPaymentType] = useState<{
    type: "Гривны" | "Доллары" | "Евро" | "Рубли" | "Инностранные карты" | null;
  }>({ type: null });

  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (userData?.username) setName(userData.username);
  }, [userData?.username]);

  return (
    <div className={styles.main}>
      {visible && (
        <Method
          onClose={() => setVisible(false)}
          onSelect={(type) => setPaymentType({ type })}
        />
      )}
      <div className={styles.mainContainer}>
        <div className={styles.mask} />
        <div className={styles.left_holder}>
          <div className={styles.title}>
            <h4>Спасибо за поддержку проекта!</h4>
            <span>
              Благодаря Вашим донатам, мы можем развивать проект, добавлять
              новые возможности и делать игру еще интереснее!
            </span>
          </div>
        </div>
        <div className={styles.holder_content}>
          <h4 className={styles.title}>ПОПОЛНИТЬ БАЛАНС</h4>
          <div className={styles.container}>
            <div className={styles.info}>
              <div className={styles.container_values}>
                <div className={styles.flex_row}>
                  <div className={styles.icon}>
                    <User size={16} />
                  </div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ник игрока"
                  />
                </div>
              </div>
              <div className={styles.container_values}>
                <div className={styles.flex_row}>
                  <div className={styles.icon}>
                    <Mail size={16} />
                  </div>
                  <input
                    type="text"
                    value={session?.user?.email}
                    placeholder="Email для квитанции"
                  />
                </div>
              </div>
              <div className={styles.container_values}>
                <div className={styles.flex_row}>
                  <div className={styles.icon}>
                    <Wallet size={16} />
                  </div>
                  {paymentType.type == null ? (
                    <button
                      className={styles.payment_type}
                      onClick={() => {
                        setVisible(true);
                      }}
                    >
                      Способ оплаты
                    </button>
                  ) : (
                    <button className={styles.payment_type}>
                      {paymentType.type}
                    </button>
                  )}
                </div>
              </div>
              <div className={styles.container_values}>
                <div className={styles.flex_row}>
                  <Currency />
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value.replace(/\D/, ""))}
                    placeholder="Введите сумму в рублях"
                  />
                </div>
                <div className={styles.text_money}>
                  Мин: 100
                  <Currency />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.pay}>
            <Elements stripe={stripePromise}>
              <PaymentForm
                value={value}
                session={session}
                name={name}
                paymentType={paymentType}
              />
            </Elements>
          </div>
        </div>
        <div className={styles.radial}></div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};
