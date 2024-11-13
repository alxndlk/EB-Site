"use client";

import { ChevronRightIcon, EyeIcon } from 'lucide-react';
import styles from './Main.module.css';
import press_Start_2P from '@/app'
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import Link from 'next/link';

export const Main = () => {

    return (
        <main className={styles.main}>
            <div className={styles.title_container}>
                <div className={styles.title}>
                    <h1 className={`text-white ${press_Start_2P.className}`}>ВОЙТИ</h1>
                    <div className={styles.account_link_container}>
                        <div>Нет аккаунта?</div>
                        <Link href='/register'>
                            Создать
                            <ChevronRightIcon />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.form}>
                <div className={styles.image_container}>
                <Image
                        src={'/allay.webp'}
                        alt="Minecraft Title"
                        width={240}
                        quality={100}
                        height={240}
                        className={styles.image}
                    />
                </div>
                <div className={styles.form_content}>
                    <div className={styles.form_content_wrapper}>
                        <div className={`${styles.form_title}`}>
                            Авторизация
                        </div>
                        <div className={styles.form_input_content}>
                            <input 
                                placeholder='Никнейм или почта' 
                                autoComplete="new-username"
                                name="new-username"
                            />
                            <div className={styles.password}>
                                <input 
                                placeholder='Пароль' 
                                type='password'
                                autoComplete="new-password"
                                name="new-password"  
                                /> 
                                <div className={styles.eye}><EyeIcon color='white'/></div>
                            </div>
                            <div className={styles.links}>
                                <div className={styles.checkbox}>
                                    <Checkbox className={styles.checkbox_ui}/>
                                    Запомнить меня 
                                </div>
                                <span className={styles.forgot_password}>Забыл пароль</span>
                            </div>
                        </div>
                        <button className={styles.button}>
                            Войти в аккаунт
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}