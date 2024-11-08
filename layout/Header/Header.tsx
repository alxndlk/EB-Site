"use client";

import styles from './Header.module.css'; 
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type HeaderProps = {
  textColor?: string;
};

export const Header: React.FC<HeaderProps> = ({ textColor = "black" }) => {

    const Name = `${textColor}`

    return (
        <header className={styles.header}>
            <div className={styles.nav_bar}>
                <div className={styles.logo}>
                    <Image width={32} height={32} src="/logo-top.png" alt='' className={`${styles[Name]}`}/>
                    <Link href='/' className={`${styles.link} text-${textColor}`}>
                        Эпоха Блоков
                    </Link>
                </div>
                <ul className={styles.ul}>
                    <li>
                        <Link href="/news" className={`${styles.link} text-${textColor} relative`}>
                            Обновления
                            <div className={styles.circle}></div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/donate" className={`${styles.link} text-${textColor}`}>Донат</Link>
                    </li>
                    <li>
                        <Link href="https://discord.gg/w3ts4QTB" target='_blank' className={`${styles.link} text-${textColor}`}>Дискорд</Link>
                    </li>
                    <li className={styles.gap_li}>
                        <Link className={`${styles.button_login} 'bg-gray-100 rounded-full `} style={{ color: textColor }} href="#">
                            Войти
                        </Link>
                        <Link className={`${styles.button} 'bg-gray-100 rounded-full `} style={{ color: textColor }} passHref href='/Эпоха Блоков.exe'>
                            Начать играть
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};
