"use client";

import { ChevronRightIcon, EyeIcon } from 'lucide-react';
import styles from './Main.module.css';
import press_Start_2P from '@/app'
import Image from 'next/image';
import Link from 'next/link';
import Form from 'next/form'

export const Main = () => {

    return (
        <main className={styles.main}>
            <div className={styles.title_container}>
                <div className={styles.title}>
                    <h1 className={`text-white ${press_Start_2P.className}`}>СОЗДАТЬ</h1>
                    <div className={styles.account_link_container}>
                        <div className={styles.account}>Уже есть аккаунт?</div>
                        <Link href='/auth'>
                            Войти
                            <ChevronRightIcon />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.form}>
                <div className={styles.image_container}>
                <Image
                        src='/allay.webp'
                        alt='Minecraft skin'
                        width={240}
                        quality={100}
                        height={240}
                        className={styles.image}
                    />
                </div>
                <div className={styles.form_content}>
                    <Form className={styles.form_content_wrapper} action='POST'>
                        <div className={`${styles.form_title}`}>
                            Регистрация
                        </div>
                        <div className={styles.form_input_content}>
                            <input 
                                placeholder='Никнейм' 
                                autoComplete="new-username"
                                name="new-username"
                                required
                            />
                            <input 
                                placeholder='Электронная почта' 
                                autoComplete="new-username"
                                name="new-username"
                                type='email'
                                required
                            />
                            <div className={styles.password}>
                                <input 
                                placeholder='Пароль' 
                                type='password'
                                autoComplete="new-password"
                                name="new-password"  
                                required
                                minLength={8}
                                />
                                <div className={styles.eye}><EyeIcon color='white'/></div>
                            </div>
                            <div className={styles.password}>
                                <input 
                                placeholder='Повторите пароль' 
                                type='password'
                                autoComplete="new-password"
                                name="new-password"  
                                required
                                minLength={8}
                                />
                                <div className={styles.eye}><EyeIcon color='white'/></div>
                            </div>
                        </div>
                        <button className={styles.button} type="submit">
                            Создать аккаунт
                            <ChevronRightIcon />
                        </button>
                    </Form>
                </div>
            </div>
        </main>
    )
}