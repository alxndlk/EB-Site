import React, { useState } from "react";
import styles from "./MainTop.module.css";
import { PlayCircleIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const MainTop = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={styles.top_main}>
      <div className={styles.top_main_content}>
        <video
          muted
          loop
          autoPlay
          className={`${styles.video} ${isHovered ? styles.videoHover : ""}`}
          playsInline
        >
          <source src="/videos/video.mp4" type="video/mp4" />
        </video>
        <div className={styles.video_bottom} />
        <div className={styles.top_main_content_title}>
          <div className={styles.aviable}>
            <Image src="/anvil.gif" alt="anvil" width={40} height={40} />
            <div className="flex flex-col items-start">
              <span>ЭПОХА БЛОКОВ</span>
              <p>ТЕХНО-МАГИЯ: NEXT УЖЕ ДОСТУПНА!</p>
            </div>
          </div>
          <div className={styles.title}>
            <h4>ЛУЧШИЕ СЕРВЕРА MINECRAFT С МОДАМИ</h4>
          </div>
          <div className={styles.paragraph}>
            <p>
              ДОБРО ПОЖАЛОВАТЬ В МИР БЕЗГРАНИЧНЫХ ВОЗМОЖНОСТЕЙ! ИССЛЕДУЙТЕ И
              СОЗДАВАЙТЕ ВМЕСТЕ С НАМИ.
            </p>
          </div>
          <div className={styles.links}>
            <Link
              className={styles.start_play}
              href="#launcher"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Начать играть
            </Link>
            <a
              className={styles.watch_trailer}
              href="https://www.youtube.com/@epohablokov/videos"
              target="__blank"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <PlayCircleIcon size={16} />
              Смотреть трейлер
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
