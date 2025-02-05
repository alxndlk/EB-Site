"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "./Navbar";
import { useSession } from "next-auth/react";
import { useUserData } from "@/hooks/useUserData";
import { Menu } from "./Menu";
import { Servers } from "./Servers";
import { XIcon } from "lucide-react";

export const Header: React.FC = () => {
  const { data: session } = useSession();
  const { userData } = useUserData();
  const [scrolled, setScrolled] = useState(false);
  const [showServers, setShowServers] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      const viewportHeight = document.documentElement.clientHeight;

      setScrolled(scrollPosition > viewportHeight * 0.01);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleServers = () => {
    setShowServers((prev) => !prev);
  };

  const closeServers = () => {
    setShowServers(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
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
          <Navbar toggleServers={toggleServers} />
          <Menu />
          <li className={styles.gap_li}>
            {session ? (
              <Link href="/profile" className={styles.profile}>
                {session.user?.name}
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
      {showServers && <Servers onClose={closeServers} />}
      {isVisible && (
        <div className={styles.serverOpenDate}>
          <div className={styles.serverOpenContainer}>
            <div className={styles.xicon_holder}>
              <XIcon
                size={12}
                onClick={() => setIsVisible(false)}
                className={styles.xicon}
              />
            </div>
            Открытие сервера уже c 14 февраля! 🥳
          </div>
        </div>
      )}
    </header>
  );
};
