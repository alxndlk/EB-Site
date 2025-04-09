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
import { useRouter } from "next/navigation";
import { FaRegUserCircle, FaUsers } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import { useServerStatus } from "@/context/ServerStatusContext";

export const Header: React.FC = () => {
  const { data: session, status } = useSession();
  const { userData } = useUserData();
  const [showServers, setShowServers] = useState(false);

  const toggleServers = () => {
    setShowServers((prev) => !prev);
  };

  const closeServers = () => {
    setShowServers(false);
  };

  const USERNAME = userData?.username;

  const router = useRouter();

  const serverData = useServerStatus();

  return (
    <header className={`${styles.header}`}>
      <div className={styles.nav_bar}>
        <div className={styles.logo}>
          <Image
            width={95}
            height={46}
            src="/icons/logo.png"
            alt="Эпоха Блоков"
            className={styles.logoImage}
            onClick={() => {
              router.push("/");
            }}
          />
          <div className={styles.users_online}>
            <FaUsers size={14} color="#ffffffbf" />
            <h3>ОНЛАЙН:</h3>
            <span>{serverData?.players.online}</span>
          </div>
        </div>
        <Navbar toggleServers={toggleServers} />

        <ul className={`${styles.ul} ${styles.nav_buttons}`}>
          <Menu />
          <li className={styles.gap_li}>
            {status === "loading" ? (
              <Skeleton
                height={32}
                width={150}
                baseColor="transparent"
                borderRadius={6}
                highlightColor="#ffffff1a"
              />
            ) : session ? (
              <div className={styles.gap_li}>
                <Link href="/profile" className={styles.profile}>
                  {USERNAME ? (
                    <div className={styles.profile}>
                      <div className={styles.nickname}>
                        {USERNAME.toUpperCase()}
                      </div>
                      <div className={styles.balance_header}>
                        <FaRegUserCircle size={20} />
                      </div>
                    </div>
                  ) : (
                    <Skeleton
                      height={32}
                      width={150}
                      baseColor="transparent"
                      borderRadius={6}
                      highlightColor="#ffffff1a"
                    />
                  )}
                  <div className={styles.player_currency}>МОЙ ПРОФИЛЬ</div>
                </Link>
                <Link className={styles.button} href="/payment">
                  ПОПОЛНИТЬ СЧЁТ
                </Link>
              </div>
            ) : (
              <div className={styles.gap_li}>
                <Link className={styles.button_login} href="/auth">
                  ВОЙТИ
                </Link>
                <Link className={styles.button} href="/register">
                  СОЗДАТЬ АККАУНТ
                </Link>
              </div>
            )}
          </li>
        </ul>
      </div>

      {showServers && <Servers onClose={closeServers} />}
    </header>
  );
};
