"use client";

import { ChevronRightIcon, EyeIcon, XIcon } from 'lucide-react';
import styles from './Main.module.css';
import press_Start_2P from '@/app'
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { useState } from 'react';
import { signIn } from "next-auth/react";
import { FormEvent } from 'react';
import { useRouter } from "next/navigation";

export const Main = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [passwordType, setPasswordType] = useState('password');
    const router = useRouter();
    

    const togglePasswordVisibility = () => {
        setPasswordType(prevType => (prevType === 'password' ? 'text' : 'password'));
      };

      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if ( !email || !password) {
            setError('Заполните все поля');
            return;
        }
    
        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });
    
            if (res && res.error) {
                setError(res.error || "Неправильные данные");
                return;
            }
    
            router.replace("/");
        } catch (err) {
            setError("Something went wrong. Please try again.");
            console.error(err);
        }
    };

    return (
        <main className={styles.main}>
            {error  && (
                <div className={styles.error}>
                    {error}
                    <XIcon 
                        onClick={() => setError('')}
                        className='cursor-pointer'/>
                </div>)
            }
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

                <div className={styles.form_content}>
                    <form className={styles.form_content_wrapper} onSubmit={handleSubmit}>
                        <div className={`${styles.form_title}`}>
                            Авторизация
                        </div>
                        <div className={styles.form_input_content}>

                            <input 
                                placeholder='Никнейм или почта' 
                                autoComplete="new-username"
                                name="new-username"
                                onChange={e => setEmail(e.target.value)}
                            />

                            <div className={styles.password}>

                                <input 
                                placeholder='Пароль' 
                                type={passwordType}
                                autoComplete="new-password"
                                name="new-password"  
                                id='password'
                                onChange={e => setPassword(e.target.value)}
                                /> 

                                <div className={styles.eye} onClick={togglePasswordVisibility}><EyeIcon color='white'/></div>
                            </div>
                            <div className={styles.links}>
                                <div className={styles.checkbox}>
                                    <Checkbox className={styles.checkbox_ui}/>
                                    Запомнить меня 
                                </div>
                                <span className={styles.forgot_password}>Забыл пароль</span>
                            </div>
                        </div>
                        <button className={styles.button} onClick={() => setError('')}>
                            Войти в аккаунт
                            <ChevronRightIcon />
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}