"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";

import styles from "./Main.module.css";
import { InputActive } from "@/app/ui/input";
import StatusBar from "@/app/ui/StatusBar";
import Image from "next/image";

export const Main = () => {
  const router = useRouter();

  const [nameIcon, setNameIcon] = useState(false);
  const [emailIcon, setEmailIcon] = useState(false);
  const [passwordIcon, setPasswordIcon] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<{
    text: string | null;
    type: "success" | "error" | null;
  }>({
    text: null,
    type: null,
  });

  const [buttonText, setButtonText] = useState("Создать аккаунт");

  const latinPattern = /^[a-zA-Z0-9]+$/;

  const validateName = (value: string) => {
    if (value.length >= 3 && latinPattern.test(value)) {
      setNameIcon(true);
      return true;
    } else {
      setNameIcon(false);
      setMessage({ text: "Не менее 3 символов", type: "error" });
      return false;
    }
  };

  const validateEmail = (value: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(value)) {
      setEmailIcon(true);
      return true;
    } else {
      setEmailIcon(false);
      setMessage({ text: "Неправильный формат почты", type: "error" });
      return false;
    }
  };

  const validatePassword = (value: string) => {
    if (value.length >= 6) {
      setPasswordIcon(true);
      return true;
    } else {
      setPasswordIcon(false);
      setMessage({ text: "Не менее 6 символов для пароля", type: "error" });
      return false;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !validateName(name) ||
      !validateEmail(email) ||
      !validatePassword(password)
    ) {
      return;
    }

    setButtonText("Создание...");

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setMessage({
          text: "Пользователь с таким ником или почтой уже существует",
          type: "error",
        });
        setButtonText("Создать аккаунт");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) throw new Error("Ошибка при регистрации");

      const signInResult = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (signInResult?.ok) {
        setMessage({ text: "Аккаунт успешно создан", type: "success" });
        router.push("/");
      } else {
        setMessage({
          text: "Не удалось авторизоваться. Попробуйте войти вручную.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Ошибка при регистрации: ", error);
      setMessage({ text: "Произошла ошибка при регистрации", type: "error" });
    } finally {
      setButtonText("Создать аккаунт");
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.wrapper_main}>
        <div className={styles.text}>
          <h4>Присоединяйся к нам уже сейчас!</h4>
          <p>
            Для игроков, которые не боятся принимать вызовы, строить свои миры и
            достигать новых высот в каждом приключении!
          </p>
        </div>
        <Image
          src="/characters.png"
          alt="image"
          height={600}
          width={600}
          className={styles.image}
          quality={100}
        />
        <div className={styles.red}></div>
        <div className={styles.light_2}></div>
        {message && (
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
                <div className={`${styles.form_title}`}>
                  <h4>Регистрация</h4>
                  <p>
                    Есть аккаунт?<Link href="/auth">Войти</Link>
                  </p>
                </div>
                <div className={styles.form_input_content}>
                  <div className={styles.input_content}>
                    <p>
                      Никнейм{""}
                      {""}
                      <span>(только латиница)</span>
                    </p>
                    <InputActive
                      placeholder="Мой ник"
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      autoComplete="off"
                      icon={nameIcon}
                    />
                  </div>
                  <div className={styles.input_content}>
                    <p>Почта</p>
                    <InputActive
                      placeholder="you@example.com"
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      autoComplete="off"
                      icon={emailIcon}
                    />
                  </div>
                  <div className={styles.input_content}>
                    <p>Пароль</p>
                    <InputActive
                      placeholder="Придумайте пароль"
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      autoComplete="off"
                      icon={passwordIcon}
                    />
                  </div>
                </div>
                <button className={styles.button}>{buttonText}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
