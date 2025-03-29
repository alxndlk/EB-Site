"use client";

import React from "react";
import styles from "./Main.module.css";
import { FaWindows } from "react-icons/fa";
import { ArrowRight, Download } from "lucide-react";
import { UpdateList } from "@/app/updates/updateList";
import { Block } from "./Block/Block";
import { IoPlayCircle } from "react-icons/io5";
import { useRouter } from "next/navigation";

export const Main = () => {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <section className={styles.holder_top}>
        <div className={styles.shadow} />
        <div className={styles.top}>
          <div className={styles.shadow} />

          <video muted loop autoPlay className={styles.video} playsInline>
            <source src="/videos/videotm.mp4" type="video/mp4" />
          </video>

          <div className={styles.title}>
            <h3>“Такая, которой её еще не показывали.”</h3>
            <span>Сезон 2.1</span>
            <button
              className={styles.button}
              onClick={() => {
                router.push("/Эпоха Блоков.exe");
              }}
            >
              <FaWindows size={48} />
              <div className={styles.flex_col}>
                <h4>НАЧАТЬ ИГРАТЬ</h4>
                <h5>БЕСПЛАТНО</h5>
              </div>
            </button>
          </div>

          <div className={styles.content}>
            <div className={styles.flex_row}>
              <h2>ПОСЛЕДНИЕ ОБНОВЛЕНИЯ</h2>
              <h1>
                СМОТРЕТЬ ВСЕ <ArrowRight size={14} />
              </h1>
            </div>
            <div className={styles.container}>
              {Object.entries(UpdateList.tmnext).map(([key, update]) => (
                <div
                  key={key}
                  className={
                    key === "0.2"
                      ? styles.updates
                      : `${styles.updates} ${styles.disable}`
                  }
                >
                  <div className={styles.text}>
                    <span>{update.date}</span>
                    <h3>{update.name}</h3>
                    <p>{update.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.image}>
        <div className={styles.shadow} />
        <div className={styles.shadow_t} />

        <div className={styles.text_image}>
          <span>v1.20.1</span>
          <h3>ТЕХНО-МАГИЯ: NEXT</h3>
          <p>
            Добро пожаловать в мир безграничных возможностей! Здесь вас ждут
            удивительные приключения, захватывающие открытия и бесконечные
            горизонты для творчества. Исследуйте, создавайте и станьте частью
            уникального сообщества!
          </p>
          <button
            className={styles.button}
            onClick={() => {
              router.push("/Эпоха Блоков.exe");
            }}
          >
            <Download /> СКАЧАТЬ ЛАУНЧЕР
          </button>
        </div>
      </section>
      <section className={styles.mods}>
        <div className={styles.shadow_mods} />
        <div className={styles.shadow_mods_l} />
        <div className={styles.shadow_mods_r} />
        <div className={styles.shadow_mods_t} />
        <div className={styles.mods_holder}>
          <Block />
        </div>
      </section>
      <section className={styles.hold}>
        <div className={styles.shadow} />
        <div className={styles.shadow_t} />

        <div className={styles.hold_image}>
          <div className={styles.text_holder}>
            <div className={`${styles.text_content} ${styles.title_text}`}>
              <span>СПИСОК</span>
              <div className={styles.mod_list}>
                <div className={styles.mod_title}>
                  <h3>Технические и индустриальные моды:</h3>
                  <p>
                    Applied Energistics 2 – система хранения предметов и
                    автоматизация.
                  </p>
                  <p>
                    Mekanism – расширенная индустриальная механика, генерация
                    энергии, машины.
                  </p>
                  <p>Thermal Series – базовые ресурсы для Thermal серии.</p>
                  <p>Powah – альтернативная система генерации энергии.</p>
                  <p>Flux Networks – беспроводная передача энергии.</p>
                </div>
                <div className={styles.mod_title}>
                  <h3>Магические моды:</h3>
                  <p>
                    Applied Botanics – связка Botania и Applied Energistics 2.
                  </p>
                  <p>
                    Botania (через Botanical Machinery и MythicBotany) – магия
                    через растения и мана-систему.
                  </p>
                  <p>Enigmatic Legacy – магические предметы и способности.</p>
                  <p>
                    Forbidden and Arcanus – магия, алтари и еще раз магия...
                  </p>
                </div>
                <div className={styles.mod_title}>
                  <h3>Геймплейные улучшения:</h3>
                  <p>Tectonic – генерация мира.</p>
                  <p>Falling Tree – реалистичное срубание деревьев.</p>
                  <p>Artifacts – уникальные артефакты с эффектами.</p>
                  <p>Better Stats – улучшенные характеристики игрока.</p>
                  <p>Mouse Tweaks – удобное управление инвентарем.</p>
                  <p>JEI – просмотр рецептов крафта.</p>
                  <p>Loot Beams – подсветка предметов при дропе.</p>
                  <p>Jade – аналог WAILA для просмотра информации о блоках.</p>
                  <p>Curios API – система аксессуаров и слотов.</p>
                </div>
                <div className={styles.mod_title}>
                  <h3>Графические и UI-улучшения:</h3>
                  <p>Oculus – альтернативный рендерер (аналог Optifine).</p>
                  <p>
                    Embeddium – улучшение производительности (аналог Sodium).
                  </p>
                  <p>Iris – поддержка шейдеров.</p>
                  <p>Blur – размытый фон в меню.</p>
                  <p>Legendary Tooltips – улучшенные подсказки предметов.</p>
                  <p>Better Tab – улучшенное меню вкладок.</p>
                  <p>И много других...</p>
                </div>
              </div>
            </div>
            <div className={styles.text_content}>
              <div className={styles.left_text}>
                <h3>БОЛЕЕ 200</h3>
                <span>МОДОВ</span>
              </div>
              <p>
                Модпак с 200+ модами полностью обновляет игру, добавляя новые
                биомы, структуры, квесты и сложных боссов, а продвинутая
                оптимизация обеспечивает стабильную и плавную работу без
                просадок FPS.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.download}>
        <div className={styles.shadow} />
        <div className={styles.shadow_t} />
        <div className={styles.container_download}>
          <div className={styles.donwload_section}>
            <h3>ЗАГРУЗИ НАШ ЛАУНЧЕР ЛЕГКО!</h3>
            <button
              className={styles.button}
              onClick={() => {
                router.push("/Эпоха Блоков.exe");
              }}
            >
              <FaWindows size={48} />
              <div className={styles.flex_col}>
                <h4>НАЧАТЬ ИГРАТЬ</h4>
                <h5>БЕСПЛАТНО</h5>
              </div>
            </button>
          </div>
          <div className={styles.video_section}>
            <div
              className={styles.video_container}
              onClick={() => {
                router.push(
                  "https://www.youtube.com/watch?v=VaBb_42FKOs&ab_channel=%D0%AD%D0%BF%D0%BE%D1%85%D0%A0%D0%91%D0%BB%D0%9A%D0%9E%D0%92"
                );
              }}
            >
              <div className={styles.play}>
                <IoPlayCircle size={64} height={32} width={32} />
                <span className={styles.span_text}>
                  ПОСМОТРЕТЬ ТРЕЙЛЕР НАШЕГО СЕРВЕРА
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
