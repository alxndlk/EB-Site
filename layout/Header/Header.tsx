"use client";

import styles from './Header.module.css'; 
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from "next-auth/react";
import { GoArrowUpRight } from "react-icons/go";
import { TailSpin } from 'react-loader-spinner';

export const Header: React.FC = () => {
  const { data: session, status } = useSession();

  if (status === "loading" || !session) {
    return (
      <div className={styles.loading}>
        <TailSpin color='white' width={50} height={50} radius={1} />
        Загрузка сайта...
      </div>
    )
  }

  return (

    <header className={styles.header}>

      <div className={styles.nav_bar}>
        <div className={styles.logo}>
          <Image width={24} height={24} src="/logo-top.png" alt="" className={`${styles.logoImage}`} />
          <Link href="/" className={`${styles.link}`}>
            Эпоха Блоков
          </Link>
        </div>
        <ul className={styles.ul}>
          <li>
            <Link href="/servers" className={`${styles.link} relative`}>
              Сервера
            </Link>
          </li>
          <li>
            <Link href="/news" className={`${styles.link} relative`}>
              Обновления
            </Link>
          </li>
          <li>
            <Link href="/donate" className={`${styles.link}`}>Донат</Link>
          </li>

          <li>
            <Link href="https://discord.gg/w3ts4QTB" target="_blank" className={`${styles.link}`}>Дискорд</Link>
            <GoArrowUpRight size={10}/>
          </li>
          <li>
            <Link href="/forum" target="_blank" className={`${styles.link}`}>Форум</Link>
            <GoArrowUpRight size={10}/>
          </li>
          <li className={styles.gap_li}>
            {session ? (
              <Link href="/profile" className={styles.profile}>
                {session.user?.name}
                <div className={styles.badge}>игрок</div>
              </Link>
            ) : (
              <Link
                className={`${styles.button_login}`}
                href="/auth"
              >
                Войти
              </Link>
            )}
            <Link className={`${styles.button}`} href="/">
              Начать играть
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
