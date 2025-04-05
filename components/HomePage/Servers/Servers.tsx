import React from "react";
import styles from "./Servers.module.css";
import { ChevronRight } from "lucide-react";
import { FaDiscord, FaTelegram, FaTiktok, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Servers = () => {
  const router = useRouter();

  return (
    <div className={styles.servers}>
      <div className={styles.servers_title}>
        <span>ИГРОВЫЕ СЕРВЕРА</span>
        <div className={styles.servers_header}>
          <h3>УНИКАЛЬНЫЕ ИГРОВЫЕ СЕРВЕРА НА ЛЮБОЙ ВКУС!</h3>
          <p>
            Исследуй миры, созданные для любого стиля игры — от знакомой
            классики до тяжелых технологий и космоса!
          </p>
        </div>
      </div>
      <div className={styles.servers_container}>
        <div className={styles.holder}>
          <div className={styles.help}>
            <div className={styles.title}>КАКИЕ СЕРВЕРА ЕСТЬ?</div>
            <div className={styles.desription}>
              Просто выбери сервер, который тебе больше по душе!
            </div>
          </div>
          <div className={styles.servers_holder}>
            <div className={styles.server} style={{}}>
              <div className={styles.server_style}>
                <div className={styles.server_info}>
                  <Image
                    width={48}
                    height={48}
                    alt="server_icon"
                    src="/icons/mekanism.png"
                    className={styles.server_logo}
                    quality={100}
                  />
                  <div className={styles.server_text}>
                    <h4>Техно-Магия: Next</h4>
                    <p>Погрузись в мир сложных технологий!</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    router.push("/tmnext");
                  }}
                >
                  ПОДРОБНЕЕ <ChevronRight size={18} />
                </button>
              </div>
            </div>
            <div className={styles.server} style={{}}>
              <div className={styles.server_style}>
                <div className={styles.server_info}>
                  <Image
                    width={48}
                    height={48}
                    alt="server_icon"
                    src="/icons/workbench.png"
                    className={styles.server_logo}
                    quality={100}
                  />
                  <div className={styles.server_text}>
                    <h4>Классика +</h4>
                    <p>Улучшенная классика с новой графикой и оптимизацией.</p>
                  </div>
                </div>
                <button className={styles.disable}>СКОРО!</button>
              </div>
            </div>
            <div className={styles.server} style={{}}>
              <div className={styles.server_style}>
                <div className={styles.server_info}>
                  <Image
                    width={48}
                    height={48}
                    alt="server_icon"
                    src="/icons/ae2.png"
                    className={styles.server_logo}
                    quality={100}
                  />
                  <div className={styles.server_text}>
                    <h4>Технария</h4>
                    <p>
                      Оптимизация, механизмы, инновации для технической игры.
                    </p>
                  </div>
                </div>

                <button className={styles.disable}>СКОРО!</button>
              </div>
            </div>
          </div>
          <span className={styles.helper}>
            Не можете выбрать где поиграть?
            <Link href="https://discord.gg/gQxQNpYjmy">
              <FaDiscord />
              Дискорд в помощь!
            </Link>
          </span>
        </div>
        <div className={styles.holder}>
          <div className={styles.help}>
            <div className={styles.title}>ПРИСОЕДЕНЯЙСЯ К НАМ!</div>
            <div className={styles.desription}>
              Переходи по ссылкам ниже, что бы вступить в наши соц. сети.
            </div>
          </div>
          <div className={styles.servers_holder}>
            <div className={styles.grid}>
              <div
                className={styles.link}
                onClick={() => {
                  router.push("https://discord.gg/gQxQNpYjmy");
                }}
              >
                <FaDiscord />
                Discord
              </div>
              <div
                className={styles.link}
                onClick={() => {
                  router.push("https://t.me/+vO9cZ8FtLD85YmYy");
                }}
              >
                <FaTelegram />
                Telegram
              </div>
              <div
                className={styles.link}
                onClick={() => {
                  router.push("https://www.youtube.com/@epohablokov");
                }}
              >
                <FaYoutube />
                YouTube
              </div>
              <div
                className={styles.link}
                onClick={() => {
                  router.push("https://www.tiktok.com/@epohablokov");
                }}
              >
                <FaTiktok />
                TikTok
              </div>
            </div>
          </div>
          <span className={styles.helper}>
            Вы медийная личность?
            <Link href="https://t.me/alxndlk">
              <FaTelegram />
              Напишите нам!
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
