'use client';

import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from './Navbar';
import { useSession } from 'next-auth/react';
import { useUserData } from '@/hooks/useUserData';

export const Header: React.FC = () => {
  const { data: session } = useSession();
  const { userData } = useUserData();

  return (
    <header className={styles.header}>
      <div className={styles.nav_bar}>
        <div className={styles.logo}>
          <Image
            width={24}
            height={24}
            src="/logo-top.png"
            alt="Эпоха Блоков"
            className={styles.logoImage}
          />
          <Link href="/" className={styles.link}>
            Эпоха Блоков
          </Link>
        </div>
        <ul className={styles.ul}>
          <Navbar />
          <li className={styles.gap_li}>
            {session ? (
              <Link href="/profile" className={styles.profile}>
                {session.user?.name}
                <div className={styles.badge}>
                  {userData ? userData.role : 'Загрузка...'}
                </div>
              </Link>
            ) : (
              <Link className={styles.button_login} href="/auth">
                Войти
              </Link>
            )}
            <Link className={styles.button} href="/">
              Начать играть
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
