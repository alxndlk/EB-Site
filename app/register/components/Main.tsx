"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";

import styles from "./Main.module.css";
import { ThreeDots } from "react-loader-spinner";
import { InputActive } from "@/app/ui/input";
import StatusBar from "@/app/ui/StatusBar";
import Image from "next/image";

export const Main = () => {
    const router = useRouter();

    const [nameIcon, setNameIcon] = useState(false);
    const [emailIcon, setEmailIcon] = useState(false);
    const [passwordIcon, setPasswordIcon] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState<{ text: string | null; type: 'success' | 'error' | null }>({
        text: null,
        type: null,
    });

    const validateName = (value: string) => {
        const latinPattern = /^[a-zA-Z0-9]+$/;
        if (value.length >= 3 && latinPattern.test(value)) {
            setNameIcon(true);
        } else {
            setNameIcon(false);
        }
    };

    const validateEmail = (value: string) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setEmailIcon(emailPattern.test(value));
    };

    const validatePassword = (value: string) => {
        setPasswordIcon(value.length >= 6);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setMessage({ text: "Заполните все поля", type: 'error' });
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

            const { user } = await resUserExists.json();

            if (user) {
                setMessage({ text: "Пользователь с таким ником или почтой уже существует", type: 'error' });
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
                setMessage({ text: "Аккаунт успешно создан", type: 'success' });
                router.push("/");
            } else {
                setMessage({ text: "Не удалось авторизоваться. Попробуйте войти вручную.", type: 'error' });
            }
        } catch (error) {
            console.error("Ошибка при регистрации: ", error);
            setMessage({ text: "Произошла ошибка при регистрации", type: 'error' });
        }
    };

    return (
        <main className={styles.main}>
            <div className={styles.text}>
                <h4>Присоедейся к нам уже сейчас!</h4>
                <p>Для игроков, которые не боятся принимать вызовы, строить свои миры и достигать новых высот в каждом приключении!</p>
            </div>
            <Image src='/characters.png' alt='image' height={800} width={800} className={styles.image} quality={100}/>
            <div className={styles.red}></div>
            <div className={styles.light_2}></div>
            {message && (
                <StatusBar message={message.text} type={message.type} onClose={() => setMessage({ text: null, type: null })} />
            )}
            <div className={styles.form}>
                <div className={styles.form_padding}>
                    <div className={styles.form_content}>
                        <form className={styles.form_content_wrapper} onSubmit={handleSubmit}>
                            <div className={`${styles.form_title}`}>
                                <h4>Регистрация</h4>
                                <p>Есть аккаунт?<Link href='/auth'>Войти</Link></p>
                            </div>
                            <div className={styles.form_input_content}>
                                <div className={styles.input_content}>
                                    <p>Никнейм</p>
                                    <InputActive
                                        placeholder='Мой ник'
                                        onChange={e => {
                                            setName(e.target.value);
                                            validateName(e.target.value);
                                        }}
                                        type='text'
                                        autoComplete='off'
                                        icon={nameIcon}
                                    />
                                </div>

                                <div className={styles.input_content}>
                                    <p>Почта</p>
                                    <InputActive
                                        placeholder='you@example.com'
                                        onChange={e => {
                                            setEmail(e.target.value);
                                            validateEmail(e.target.value);
                                        }}
                                        type='text'
                                        autoComplete='off'
                                        icon={emailIcon} 
                                    />
                                </div>

                                <div className={styles.input_content}>
                                    <p>Пароль</p>
                                    <InputActive
                                        placeholder='Придумайте пароль'
                                        onChange={e => {
                                            setPassword(e.target.value);
                                            validatePassword(e.target.value);
                                        }}
                                        type='password'
                                        autoComplete='off'
                                        icon={passwordIcon}
                                    />
                                </div>
                            </div>
                            {message.type === 'success' ? (
                                <button className={styles.button}>
                                    <ThreeDots width={32} height={32} color='#000' />
                                </button>
                            ) : (
                                <button className={styles.button} onClick={() => {setMessage({text: '', type: 'error'})}}>
                                    Создать аккаунт
                                </button>
                            )}
                        </form>
                    </div>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.radial}></div>
        </main>
    );
};
