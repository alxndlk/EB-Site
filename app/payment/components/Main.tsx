"use client";

import { useSession } from "next-auth/react";
import React, { useState } from "react";
import styles from "./Main.module.css";
import { NextResponse } from "next/server";

export const Main = () => {
  const { data: session } = useSession();

  const [value, setValue] = useState("200");

  const isButtonDisabled = Number(value) < 50 || Number(value) > 500000;

  const handleUpdateBalance = async () => {
    try {
      const response = await fetch("/api/updateBalance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: value,
          email: session?.user?.email,
        }),
      });
    } catch (error) {
      return NextResponse.json(
        { message: "Ошибка при обновлении данных" },
        { status: 500 }
      );
    }
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
          <div className={styles.container}>
            <div className={styles.title_container}>
              <h4>Введи ник и почту</h4>
            </div>
            <div className={styles.info}>
              <div className={styles.inputs}>
                <input type="text" placeholder={session?.user?.name || ""} />
                <p>
                  Можно написать ник другого игрока — тогда покупка придёт к
                  нему на аккаунт. Поздравь и порадуй друга или подругу :)
                </p>
              </div>
              <div className={styles.inputs}>
                <input type="text" placeholder={session?.user?.email || ""} />
                <p>На эту почту мы отправим чек об оплате</p>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.title_container}>
              <h4>Выбери сумму</h4>
            </div>
            <div className={styles.values}>
              <div className={styles.value}>
                {[100, 200, 400, 700, 1000].map((amount) => (
                  <button key={amount} onClick={() => setValue(String(amount))}>
                    {amount} ₽
                  </button>
                ))}
              </div>
              <p>
                Можно написать ник другого игрока — тогда покупка придёт к нему
                на аккаунт. Поздравь и порадуй друга или подругу :)
              </p>
              <div className={styles.finish}>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  min={50}
                  placeholder="Не менее 50 ₽"
                />

                {isButtonDisabled ? (
                  <button disabled className={styles.disabled}>
                    Продолжить
                  </button>
                ) : (
                  <button
                    className={styles.button}
                    onClick={handleUpdateBalance}
                  >
                    Продолжить
                  </button>
                )}
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
