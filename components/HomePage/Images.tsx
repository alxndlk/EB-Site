import React, { useState } from "react";
import styles from "./Main.module.css";
import { CgMouse } from "react-icons/cg";
import { IoPlayCircle } from "react-icons/io5";
import { ChevronRight } from "lucide-react";
import { ImagesConst } from "./contants";
import { Swiper } from "./Swiper/Swiper";
import Link from "next/link";
import { FaWindows } from "react-icons/fa";

export const Images = () => {
  const [isSwiperOpen, setIsSwiperOpen] = useState(false);

  return (
    <div className={`${styles.images_container}`}>
      {isSwiperOpen && <Swiper onClose={() => setIsSwiperOpen(false)} />}
      <div className={styles.content_images}>
        <div className={styles.scroll_to_continue}>
          <CgMouse size={20} />
          Листай дальше, чтобы узнать больше
        </div>
        <div className={styles.im_vi_container}>
          <div className={styles.images_descriptions}>
            <div className={styles.text_container}>
              <h3>
                ЧТО ТАКОЕ {""}
                <span className={styles.highlight}>ЭПОХА БЛОКОВ?</span>
              </h3>
              <p>
                Забудь о лагах и низком FPS — благодаря продвинутой оптимизации
                игра работает плавно даже на слабых ПК. <br />
                <br /> Мир стал еще красивее: переработанная генерация создает
                уникальные биомы, живописные пейзажи и реалистичные ландшафты.
                <br />
                Анимированные текстуры оживляют окружение. Новые моды расширяют
                возможности, добавляя новые механики и впечатления.
                <br />
                <br />
                Cкачай и погрузись в лучшую версию игры!
              </p>
              <div className={styles.link_holder}>
                <Link className={styles.start_play} href="#launcher">
                  СКАЧАТЬ ЛАУНЧЕР
                </Link>
                <div className={styles.text_launcher}>
                  <span>
                    <FaWindows />
                    Windows 7 и выше
                  </span>
                  <Link href="performance">Системные требования</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.images_video}>
            <div
              className={styles.video_button}
              onClick={() => {
                window.open(
                  "https://www.youtube.com/watch?v=VaBb_42FKOs&ab_channel=%D0%AD%D0%BF%D0%BE%D1%85%D0%A0%D0%91%D0%BB%D0%9A%D0%9E%D0%92",
                  "_blank"
                );
              }}
            >
              <IoPlayCircle size={64} />
              <span>ПОСМОТРЕТЬ ТРЕЙЛЕР НАШЕГО СЕРВЕРА</span>
            </div>

            <div className={styles.grid}>
              {ImagesConst.map((image, index) => (
                <div
                  key={index}
                  className={`${styles.grid_image}`}
                  style={{ backgroundImage: `url(${image})` }}
                  onClick={() => {
                    setIsSwiperOpen(true);
                  }}
                />
              ))}
              <div
                className={styles.grid_image}
                onClick={() => {
                  setIsSwiperOpen(true);
                }}
              >
                <span>БОЛЬШЕ ФОТО</span>
                <ChevronRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
