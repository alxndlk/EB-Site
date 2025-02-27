import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import {
  FaHashtag,
  FaHome,
  FaPlay,
  FaPlayCircle,
  FaQuestion,
  FaQuestionCircle,
  FaTelegram,
  FaUser,
} from "react-icons/fa";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  FileUser,
  Mail,
  Settings,
  XIcon,
} from "lucide-react";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoIosWarning } from "react-icons/io";

export const Main = () => {
  return (
    <div className={styles.holder}>
      <div className={styles.launcher}>
        <div className={`${styles.row} ${styles.header}`}>
          <div className={styles.logo_container}>
            <Image
              alt="logo"
              width={624}
              height={222}
              className={styles.logo}
              src="/launcher/logo.png"
              quality={100}
            />
          </div>
          <div className={styles.main_profile}>
            <div className={styles.profile}>
              <Image
                alt="avatar"
                width={32}
                height={32}
                className={styles.avatar}
                src="/launcher/default.png"
                quality={100}
              />
              <div className={styles.user_data}>
                <span>sansanych</span>
                <p>sansanych@gmail.com</p>
              </div>
            </div>
            <div className={styles.buttons_link}>
              <div className={styles.button}>
                <DiscordLogoIcon width={16} height={16} />
              </div>
              <div className={styles.button}>
                <Mail size={16} />
              </div>
            </div>
          </div>
          <div className={styles.application_buttons}>
            <Image
              alt="button"
              width={24}
              height={24}
              className={styles.app_button}
              src="/launcher/collapse.png"
              quality={100}
            />
            <Image
              alt="button"
              width={24}
              height={24}
              className={styles.app_button}
              src="/launcher/close-white.png"
              quality={100}
            />
          </div>
          <div></div>
          <div></div>
        </div>
        <div className={`${styles.row} ${styles.main_container}`}>
          <div className={`${styles.column} ${styles.left_bar}`}>
            <div className={styles.links}>
              <Link href="" className={styles.selected}>
                <FaHome size={16} />
                Главная
              </Link>
              <Link href="">
                <FaUser size={16} />
                Профиль
              </Link>
              <Link href="">
                <FaHashtag size={16} />
                Сообщество
              </Link>
            </div>
            <div className={styles.under_links}>
              <div className={styles.links}>
                <Link href="">
                  <Settings size={16} />
                  Настройки
                </Link>
                <Link href="">
                  <FaQuestionCircle size={16} />
                  FAQ
                </Link>
              </div>
              <div className={styles.box}>
                <div className={styles.box_titles}>
                  <h3>Поддержка</h3>
                  <span>Можно купить донат на сайте</span>
                </div>
                <button>
                  Купить <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
          <div className={`${styles.column} ${styles.main_bar}`}>
            <div className={styles.top}>
              <div className={styles.main_image}>
                <div className={styles.attributes}>
                  <span>Магия</span>
                  <span>Технологии</span>
                  <span>250+ модов</span>
                  <span>HARD</span>
                  <span>1.20.1</span>
                </div>
                <div className={styles.play}>
                  <div className={styles.tm_text} />
                  <p>
                    Создавай механизмы, изучай заклинания, исследуй мир, где
                    технологии и магия сливаются воедино.
                  </p>
                </div>
                <div className={styles.right_bottom}>
                  <h4>
                    <FaUser size={10} />
                    39
                  </h4>
                  <span className={styles.play_button}>Играть</span>
                </div>
              </div>
              <div className={styles.back_images}>
                <div className={styles.back_image}>
                  <div className={styles.box_titles}>
                    <h3>Подробнее на сайте</h3>
                    <span>
                      Официальный сайт проекта: новости, обновления и
                      дополнительные возможности.
                    </span>
                  </div>
                  <button>
                    Посетить сайт
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.container_bottom}>
              <span>Другие серверы</span>
              <div className={styles.content_bottom}>
                <div className={styles.bottom2}>
                  <div className={styles.craftoriaText} />
                  <h3 className={styles.dev}>Разработка</h3>
                  <span>
                    Создавай, исследуй и строй, используя передовые механизмы и
                    твоё воображение.
                  </span>
                </div>
                <div className={styles.bottom1}>
                  <div className={styles.classicText} />
                  <h3 className={styles.dev}>Разработка</h3>
                  <span>
                    Наслаждайся геймплеем с улучшениями, которые расширяют твои
                    возможности.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.apply}>
          <IoIosWarning size={16} color="#ED8E43" />

          <div>
            <h3>К примеру какое то уведомление</h3>
            <span>а тут будет какое то описание</span>
          </div>
        </div>
      </div>
    </div>
  );
};
