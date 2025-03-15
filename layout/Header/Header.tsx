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
  const { data: session, status } = useSession();
  const { userData } = useUserData();
  const [scrolled, setScrolled] = useState(false);
  const [showServers, setShowServers] = useState(false);

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

  const USERNAME = userData?.username;
  const BALANCE = userData?.balance;

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
                {USERNAME}
                <div className={styles.balance_header}>
                  {BALANCE}
                  <Image
                    width={16}
                    height={16}
                    alt="rubby"
                    className={styles.rubby}
                    src={"/rubby.png"}
                  />
                </div>
                <div className={styles.player_currency}>
                  100{" "}
                  <Image
                    width={16}
                    height={16}
                    alt="rubby"
                    className={styles.rubby}
                    src={"/rubby.png"}
                  />{" "}
                  = 1$ / 100₽
                </div>
              </Link>
            ) : (
              <Link className={styles.button_login} href="/auth">
                Войти
              </Link>
            )}
            <Link className={styles.button} href="/Эпоха Блоков.exe">
              Скачать лаунчер
            </Link>
          </li>
        </ul>
      </div>

      {showServers && <Servers onClose={closeServers} />}
    </header>
  );
};
