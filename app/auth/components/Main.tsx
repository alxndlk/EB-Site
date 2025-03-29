"use client";

import styles from "./Main.module.css";
import { useState, FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { InputActive } from "@/app/ui/input";
import StatusBar from "@/app/ui/StatusBar";
import Link from "next/link";
import { ThreeDots } from "react-loader-spinner";

export const Main = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [message, setMessage] = useState<{
    text: string | null;
    type: "success" | "error" | null;
  }>({ text: null, type: null });

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage({ text: "Заполните все поля!", type: "error" });
      return;
    }

    if (!isChecked) {
      setMessage({ text: "Подтвердите согласие с правилами!", type: "error" });
      return;
    }

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setMessage({ text: "Неправильные данные.", type: "error" });
        return;
      }

      setMessage({ text: "Вход выполнен.", type: "success" });

      setTimeout(() => {
        router.replace("/");
      }, 1000);
    } catch (err) {
      setMessage({ text: "Что-то пошло не так.", type: "error" });
      console.error("Ошибка авторизации:", err);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.wrapper_main}>
        <div className={styles.text}>
          <h4>МИР ЖДЁТ ТЕБЯ, БЕРИ ЕГО В СВОИ РУКИ!</h4>
          <p>
            ДЛЯ ИГРОКОВ, КОТОРЫЕ НЕ БОЯТСЯ ПРИНИМАТЬ ВЫЗОВЫ, СТРОИТЬ СВОИ МИРЫ И
            ДОСТИГАТЬ НОВЫХ ВЫСОТ В КАЖДОМ ПРИКЛЮЧЕНИИ!
          </p>
        </div>

        {message.text && (
          <StatusBar
            message={message.text}
            type={message.type}
            onClose={() => setMessage({ text: null, type: null })}
          />
        )}

        <div className={styles.form}>
          <div className={styles.form_padding}>
            <div className={styles.form_content}>
              <form
                className={styles.form_content_wrapper}
                onSubmit={handleSubmit}
              >
                <div className={styles.form_title}>
                  <h4>АВТОРИЗАЦИЯ</h4>
                  <p>
                    Нет аккаунта?<Link href="/register">Создать</Link>
                  </p>
                </div>
                <div className={styles.form_input_content}>
                  <div className={styles.input_content}>
                    <InputActive
                      placeholder="you@example.com"
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      autoComplete="off"
                    />
                  </div>

                  <div className={styles.input_content}>
                    <div className={styles.input_content_password}></div>
                    <InputActive
                      placeholder="Введите пароль"
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      autoComplete="off"
                    />
                  </div>
                </div>
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

                <button
                  className={`${styles.button} ${
                    isChecked ? styles.active : styles.disabled
                  }`}
                  type="submit"
                  disabled={!isChecked}
                >
                  {message.type === "success" ? (
                    <ThreeDots width={16} height={16} color="#fff" />
                  ) : (
                    "Войти в аккаунт"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.radial}></div>
      </div>
    </main>
  );
};
