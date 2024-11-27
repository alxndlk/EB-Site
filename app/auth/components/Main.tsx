"use client";

import styles from './Main.module.css';
import { useState } from 'react';
import { signIn } from "next-auth/react";
import { FormEvent } from 'react';
import { useRouter } from "next/navigation";
import { InputActive } from '@/app/ui/input';
import StatusBar from '@/app/ui/StatusBar';
import Link from 'next/link';
import { ThreeDots} from 'react-loader-spinner'
import Image from 'next/image';

export const Main = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState<{ text: string | null; type: 'success' | 'error' | null }>({
        text: null,
        type: null,
    });
    const router = useRouter();

      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    
        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });
    
            if (res && res.error) {
                setMessage({ text: 'Неправильные данные.', type: 'error' });
                return;
            }
            setMessage({ text: 'Вход выполнен.', type: 'success' });
            setTimeout(() => {
                router.replace("/");
              }, 1000)

        } catch (err) {
            setMessage({ text: 'Что-то пошло не так.', type: 'error' });
            console.error(err);
        }
    };

    return (
        <main className={styles.main}>
            <div className={styles.text}>
                <h4>Мир ждёт тебя, бери его в свои руки!</h4>
                <p>Для игроков, которые не боятся принимать вызовы, строить свои миры и достигать новых высот в каждом приключении!</p>
            </div>
            <Image src='/island.png' alt='image' height={500} width={500} className={styles.image} quality={100}/>
            <div className={styles.red}></div>
            <div className={styles.light_2}></div>
            {message && (
                <>
                    <StatusBar message={message.text} type={message.type} onClose={() => setMessage({ text: null, type: null })}/>
                </>
            )}
            <div className={styles.form}>
                <div className={styles.form_padding}>
                    <div className={styles.form_content}>
                        <form className={styles.form_content_wrapper} onSubmit={handleSubmit}>
                            <div className={`${styles.form_title}`}>
                                <h4 >Авторизация</h4>
                                <p>Нет аккаунта?<Link href='/register'>Создать</Link></p>
                            </div>
                            <div className={styles.form_input_content}>

                                <div className={styles.input_content}>
                                    <p>Почта</p>
                                    <InputActive 
                                        placeholder='you@example.com'
                                        onChange={e => setEmail(e.target.value)}
                                        type='text'
                                        autoComplete='off'
                                    />
                                </div>

                                <div className={styles.input_content}>
                                    <div className={styles.input_content_password}>
                                        <span>Пароль</span>
                                        <Link href="/reset" tabIndex={-1}>Забыли пароль?</Link>
                                    </div>
                                    <InputActive
                                        placeholder='Введите пароль'
                                        onChange={e => setPassword(e.target.value)}
                                        type='password'
                                        autoComplete='off'
                                    />
                                </div>

                            </div>
                            {message.type === 'success' ? (
                                <button className={styles.button}>
                                    <ThreeDots width={32} height={32} color='#000'/>
                                </button>
                            ) : (
                                <button className={styles.button}>
                                    Войти в аккаунт
                                </button>
                            )}
                        </form>
                    </div>    
                    </div>
                </div>
            <div className={styles.line}></div>
            <div className={styles.radial}></div>
        </main>
    )
}