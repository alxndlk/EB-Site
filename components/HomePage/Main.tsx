"use client";

import { useState } from "react";

import styles from "./Main.module.css";
import Link from "next/link";
import { Servers } from "./Servers/Servers";
import { Images } from "./Images";
import { MainTop } from "./MainTop";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export const Main = () => {
  const urlArray = [
    "/Home/sky.png",
    "/Home/terrain.png",
    "/Home/terrain_2.png",
    "/Home/terrain_3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? urlArray.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === urlArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main className={styles.main}>
      <MainTop />
      <Images />

      <div className={styles.features}>
        <div className={styles.features_title}>
          <span>ОСОБЕННОСТИ</span>
          <div className={styles.features_header}>
            <h3>СОЗДАЙ СВОЙ МИР С ПОЛНЫМ НАБОРОМ ИНСТРУМЕНТОВ!</h3>
            <p>
              Используй мощные инструменты, чтобы создавать, развивать и
              расширять свой мир, делая его таким, каким ты хочешь его видеть!
            </p>
          </div>
        </div>
        <div className={styles.features_container}>
          <div className={styles.features_blocks}>
            <div
              className={`${styles.block}`}
              style={{ border: "1px solid #222" }}
              id="first"
            >
              <div className={styles.shadow_slider} />
              <div className={styles.block_header}>
                <h4>НОВАЯ ГЕНЕРАЦИЯ</h4>
                <p>
                  Уникальная генерация ландшафта, неизведанные биомы и
                  захватывающие приключения ждут тебя на нашем сервере!
                </p>
              </div>
              <div className={styles.arrows}>
                <div className={styles.arrow} onClick={handlePrev}>
                  <ChevronLeftIcon size={28} absoluteStrokeWidth />
                </div>
                <div className={styles.arrow} onClick={handleNext}>
                  <ChevronRightIcon size={28} absoluteStrokeWidth />
                </div>
              </div>
              <div
                className={styles.slider}
                style={{ transform: `translateX(-${currentIndex * 25}%)` }}
              >
                {urlArray.map((src, index) => (
                  <div
                    className={styles.slide}
                    style={{ background: `url(${src}) no-repeat center/cover` }}
                    key={index}
                  />
                ))}
              </div>
            </div>

            <div className={styles.block}>
              <div className={styles.block_header}>
                <h4>НОВЫЕ ПЕЩЕРЫ</h4>
                <p>
                  Мы добавили новые, уникальные пещеры, которые создадут ещё
                  больше захватывающих возможностей для исследований.
                </p>
              </div>
              <div className={styles.cave}>
                <video
                  muted
                  loop
                  autoPlay
                  className={styles.animated}
                  playsInline
                >
                  <source src="/videos/cave.mp4" type="video/mp4" />
                </video>
              </div>
              <div className={styles.shadow_slider} />
            </div>
          </div>

          <div className={styles.features_blocks}>
            <div
              className={`${styles.block} ${styles.opt} `}
              style={{
                border: "1px solid #4543c0",
                background:
                  "radial-gradient(100% 64% at 50% 100%, #4543c0 0%, rgb(14, 14, 14) 100%)",
              }}
            >
              <div className={styles.block_header}>
                <h4>ОПТИМИЗАЦИЯ</h4>
                <p>
                  Повышенная производительность, стабильность и плавный игровой
                  процесс без лагов!
                </p>
              </div>
              <div className={`${styles.optimization}`}>
                <div className={styles.circles}>
                  <div className={styles.circle_container}>
                    <div className={styles.circle}>
                      <div className={styles.circleBlock}>4-5 ГБ</div>
                    </div>
                    <p>ПАМЯТЬ</p>
                  </div>
                  <div className={styles.circle_container}>
                    <div className={styles.circle} style={{ width: "140px" }}>
                      <div className={styles.circleBlock}>40-60 %</div>
                    </div>
                    <p>ПРОЦЕССОР</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.block_header}>
                <h4>НОВЫЕ МОДЫ</h4>
                <p>
                  С выходом новой версии стало возможным внедрить массу
                  оригинальных модификаций, которые принесут больше разнообразия
                  в игровой процесс.
                </p>
              </div>
              <div className={styles.show}>
                <section className={styles.section}>
                  <ul className={styles.ul}>
                    <li className={styles.li}>
                      <div
                        className={`${styles.icons} bg-[url('/icons/adastra.png')]`}
                      />
                      <div
                        className={`${styles.icons} bg-[url('/icons/ae2.png')]`}
                      />
                      <div
                        className={`${styles.icons} bg-[url('/icons/avaritia.png')]`}
                      />
                      <div
                        className={`${styles.icons} bg-[url('/icons/botania.png')]`}
                      />
                      <div
                        className={`${styles.icons} bg-[url('/icons/divine.png')]`}
                      />
                      <div
                        className={`${styles.icons} bg-[url('/icons/ei.png')]`}
                      />
                      <div
                        className={`${styles.icons} bg-[url('/icons/de.png')]`}
                      />
                      <div
                        className={`${styles.icons} bg-[url('/icons/if.png')]`}
                      />
                      <div
                        className={`${styles.icons} bg-[url('/icons/mekanism.png')]`}
                      />
                      <div
                        className={`${styles.icons} bg-[url('/icons/tf.png')]`}
                      />
                      <div
                        className={`${styles.icons} bg-[url('/icons/ts.png')]`}
                      />
                      <div
                        className={`${styles.icons} bg-[url('/icons/furnance.png')]`}
                      />
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>

          <div className={styles.features_blocks}>
            <div className={`${styles.block}`}>
              <div className={styles.block_header}>
                <h4>АНИМИРОВАННЫЕ ТЕКСТУРЫ</h4>
                <p>
                  Оживи мир с динамическими эффектами, плавными анимациями и
                  реалистичными деталями!
                </p>
              </div>

              <div className={styles.amimated_video}>
                <video
                  muted
                  loop
                  autoPlay
                  className={styles.animated}
                  playsInline
                >
                  <source src="/videos/resources.mp4" type="video/mp4" />
                </video>
                <div className={styles.shadow_video} />
              </div>
            </div>
            <div
              className={styles.block}
              style={{
                background:
                  "radial-gradient(150% 105% at 100% 100%, rgba(171, 171, 171, .25) 0%, rgba(255, 255, 255, 0) 100%)",
                border: "1px solid rgb(30, 30, 30)",
              }}
            >
              <div className={styles.block_header}>
                <h4>НОВЫЕ ШРИФТЫ И GUI</h4>
                <p>
                  Улучшенный интерфейс с современным дизайном, удобной
                  навигацией и стильными шрифтами для комфортной игры!
                </p>
              </div>

              <div className="flerx max-w-full max-h-full">
                <div className={styles.gui} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Servers />

      <div className={styles.launcher} id="launcher">
        <div className={styles.launcher_container}>
          <div className={styles.launcher_title}>
            <div className={styles.launcher_text}>
              <h4>ЗАГРУЗИ НАШ ЛАУНЧЕР ЛЕГКО!</h4>
              <p>
                Погрузись в мир захватывающих приключений с нашим удобным,
                функциональным и надежным лаунчером!
              </p>
            </div>
            <div className={styles.launcher_buttons}>
              <Link href="/Эпоха Блоков.exe" className={styles.button}>
                СКАЧАТЬ ЛАУНЧЕР
              </Link>
              <Link href="/auth">Войти в аккаунт</Link>
            </div>
          </div>
          <div className={styles.image}>
            <div className={styles.image_container} />
          </div>
        </div>
        <div className={styles.radialB}></div>
        <div className={styles.line}></div>
      </div>
    </main>
  );
};
