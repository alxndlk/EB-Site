"use client";

import styles from "./Footer.module.css";

import Link from "next/link";
import Image from "next/image";
import { FaDiscord, FaTelegram, FaTiktok, FaYoutube } from "react-icons/fa";
import { useRouter } from "next/navigation";

export const Footer = () => {
  const router = useRouter();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.content_logo}>
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
          </div>
        </div>
        <div className={styles.content}>
          <h4>РЕСУРСЫ</h4>
          <div className="flex flex-col">
            <Link href="">Серверы</Link>
            <Link href="/donate" target="_blank">
              Донат
            </Link>
            <Link href="/rules" target="_blank">
              Правила
            </Link>
          </div>
        </div>
        <div className={styles.content}>
          <h4>СОЦИАЛЬНЫЕ СЕТИ</h4>
          <div className="flex flex-col">
            <Link href="https://t.me/+vO9cZ8FtLD85YmYy">
              <FaTelegram />
              Telegram
            </Link>
            <Link href="https://discord.gg/gQxQNpYjmy">
              <FaDiscord />
              Discord
            </Link>
            <Link href="https://www.tiktok.com/@epohablokov">
              <FaTiktok />
              TikTok
            </Link>
            <Link href="https://www.youtube.com/@epohablokov/featured">
              <FaYoutube />
              YouTube
            </Link>
          </div>
        </div>
        <div className={styles.content}>
          <h4>РАЗНОЕ</h4>
          <div className="flex flex-col">
            <Link target="_blank" href="https://t.me/alxndlk">
              Работа у нас
            </Link>
          </div>
        </div>
        <div className={`${styles.content}`}>
          <div className="flex flex-col">
            <Link href="/launcher" className={styles.button}>
              Скачать лаунчер
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.paragraphs}>
        <p>© 2024 Эпоха Блоков. Все права защищены.</p>
        <div className={styles.kassa}>
          <p>
            NOT OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH
            MOJANG SYNERGIES AB.
          </p>
        </div>
      </div>
    </footer>
  );
};
