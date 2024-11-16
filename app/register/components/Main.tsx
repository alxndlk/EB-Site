"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";

import { ChevronRightIcon, EyeIcon, XIcon } from "lucide-react";
import styles from "./Main.module.css";
import press_Start_2P from "@/app";
import { Checkbox } from "@/components/ui/checkbox";

export const Main = () => {

    const router = useRouter();

    const [passwordType, setPasswordType] = useState("password");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordType(prevType => prevType === "password" ? "text" : "password");
    };

    const validateFields = () => {

        const latinPattern = /^[a-zA-Z0-9]+$/;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!name || !email || !password) return "Заполните все поля"

        if (name.length <= 2) return "Длина ника не должна быть менее 3 символов"

        if (!latinPattern.test(name)) return "Никнейм должен содержать только латинские буквы без спецсимволов"

        if (!emailPattern.test(email)) return "Введите корректный email";

    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationError = validateFields();
        
        if (validationError) {
            setError(validationError);
            return;
        }

        try {
            const resUserExists = await fetch("api/userExists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, name }),
            });

            const { user } = await resUserExists.json()

            if (user) {
                setError("Пользователь с таким ником или почтой уже существует")
                return;
            }

            const res = await fetch("api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (!res.ok) throw new Error("Ошибка при регистрации")
            

            const signInResult = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });

            if (signInResult?.ok) {
                setSuccess("Аккаунт успешно создан");
                router.push("/");
            } else setError("Не удалось авторизоваться. Попробуйте войти вручную.")

        } catch (error) {
            console.error("Ошибка при регистрации: ", error);
            setError("Произошла ошибка при регистрации");
        }
    };

    return (
        <main className={styles.main}>
            {error && (
                <div className={styles.error}>
                    {error}
                    <XIcon onClick={() => setError("")} className="cursor-pointer" />
                </div>
            )}
            {success && (
                <div className={styles.success}>
                    {success}
                </div>
            )}
            <div className={styles.title_container}>
                <div className={styles.title}>
                    <h1 className={`text-white ${press_Start_2P.className}`}>СОЗДАТЬ</h1>
                    <div className={styles.account_link_container}>
                        <div className={styles.account}>Уже есть аккаунт?</div>
                        <Link href="/auth">
                            Войти
                            <ChevronRightIcon />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.form}>
                <div className={`${styles.form_content}`}>
                    <form className={styles.form_content_wrapper} onSubmit={handleSubmit}>
                        <div className={`${styles.form_title}`}>Регистрация</div>
                        <div className={styles.form_input_content}>
                            <div className={styles.checkIcon_holder}>
                                <input
                                    placeholder="Никнейм"
                                    type="text"
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            </div>

                            <div className={styles.checkIcon_holder}>
                                <input
                                    placeholder="Электронная почта"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                            </div>

                            <div className={styles.password}>
                                <div className={styles.checkIcon_holder}>
                                    <input
                                        placeholder="Пароль"
                                        autoComplete="new-password"
                                        name="new-password"
                                        required
                                        minLength={8}
                                        value={password}
                                        type={passwordType}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className={styles.eye} onClick={togglePasswordVisibility}>
                                    <EyeIcon color="white" />
                                </div>
                            </div>
                            <div className={styles.links}>
                                <div className={styles.checkbox}>
                                    <Checkbox className={styles.checkbox_ui} />
                                    <div>
                                        <span className="opacity-70">Согласен с </span>
                                        <Link href="/rules" className="hover:underline">
                                            правилами сервера
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 flex-col">
                            <button className={styles.button} onClick={() => setError("")}>
                                Создать аккаунт
                                <ChevronRightIcon />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};
