'use client';

import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from './Navbar';
import { useSession } from 'next-auth/react';
import { useUserData } from '@/hooks/useUserData';
import { Menu } from './Menu';

export const Header: React.FC = () => {
  const { data: session } = useSession();
  const { userData } = useUserData();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        const viewportHeight = document.documentElement.clientHeight;

        setScrolled(scrollPosition > viewportHeight * 0.01);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
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
          <Menu />
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
