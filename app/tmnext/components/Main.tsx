"use client";

import React, { useState } from "react";
import styles from "./Main.module.css";
import { TableRow } from "./TableRow";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export const Main = () => {
  const urlArray = [
    "/Home/home_tmnext.png",
    "/Home/123.png",
    "/Home/3.png",
    "/Home/4.png",
    "/Home/5.png",
    "/Home/6.png",
    "/Home/7.png",
    "/Home/8.png",
    "/Home/9.png",
    "/Home/10.png",
    "/Home/11.png",
    "/Home/12.png",
    "/Home/13.png",
    "/Home/14.png",
    "/Home/15.png",
    "/Home/16.png",
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
      <div className={styles.top_container}>
        <div className={styles.holder}>
          <p>СЕЗОН 2</p>
          <h1>Техно-Магия: NEXT Уже доступна!</h1>
          <span>
            Добро пожаловать в мир безграничных возможностей! Исследуйте и
            создавайте вместе с нами.
          </span>
          <Link href="#launcher">Начать играть</Link>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <h4>1.20.1</h4>
            <p>Версия Minecraft</p>
          </div>
          <div className={styles.item}>
            <h4>БЕСКОНЕЧНЫЙ</h4>
            <p>Площадь мира</p>
          </div>
          <div className={styles.item}>
            <h4>PVP</h4>
            <p>Режим сервера</p>
          </div>
          <div className={styles.item}>
            <h4>250+</h4>
            <p>Количество модов</p>
          </div>
          <div className={styles.item}>
            <h4>HARD</h4>
            <p>Сложность игры</p>
          </div>
        </div>
      </div>
      <div className={styles.mods}>
        <div className={styles.features_title}>
          <span>Список модов</span>
          <div className={styles.features_header}>
            <h3>Все, что нужно для уникального приключения!</h3>
            <p>
              Используй мощные инструменты, чтобы создавать, развивать и
              расширять свой мир, делая его таким, каким ты хочешь его видеть!
            </p>
          </div>
        </div>

        <div className={styles.features}>
          <div className={styles.table_header}>
            <h3>Название мода</h3>
            <h3>Описание</h3>
          </div>
          <TableRow
            modName="Applied Energistics 2"
            description="Организуйте свои ресурсы и автоматизируйте производство с помощью мощной системы хранения и обработки предметов. Создавайте сложные сети, оптимизируйте процессы и управляйте своим миром с максимальной эффективностью!"
          />
          <TableRow
            modName="Avaritia"
            description="Создавайте невероятно мощные предметы и инструменты с использованием редких ресурсов и сложных рецептов. Раскройте потенциал безграничной мощи и достигните вершины игры!"
          />
          <TableRow
            modName="Botania"
            description="Исследуйте таинственные цветы, используйте ману для создания мощных артефактов и автоматизации процессов. Украсьте мир и откройте новые возможности через природную магию!"
          />
          <TableRow
            modName="Deeper Caves"
            description="Добавляет опасные уровни пещер с уникальными биомами и редкими ресурсами. Исследуйте глубины и открывайте неизведанное!"
          />
          <TableRow
            modName="Divine RPG"
            description="Расширяет мир новыми измерениями, монстрами и боссами. Откройте новые миры, сражайтесь с могущественными врагами и добывайте уникальные ресурсы для создания легендарного снаряжения!"
          />

          <TableRow
            modName="Ender IO"
            description="Передовые технологии для автоматизации, транспорта и хранения предметов. Создайте мощные машины, сети и системы, которые упростят вашу жизнь и повысят эффективность в игре!"
          />
          <TableRow
            modName="Industrial Foregoing"
            description="мод для автоматизации процессов, включая переработку ресурсов и управление животными. Упростите свою игру с помощью мощных машин!"
          />
          <TableRow
            modName="Mekanism"
            description="Высокотехнологичные устройства и механизмы для автоматизации, переработки ресурсов и создания мощных энергосистем. Расширьте возможности своего мира с помощью передовых технологий и инновационных решений!"
          />
          <TableRow
            modName="Thermal Series"
            description="Hабор модов для создания мощных машин и систем автоматизации. Используйте энергогенерацию, переработку ресурсов и улучшение инструментов для оптимизации процессов в вашем мире!"
          />
          <TableRow
            modName="Twilight Forest"
            description="добавляет новое измерение, полное таинственных лесов, подземелий и опасных боссов. Исследуйте уникальные биомы и находите редкие сокровища!"
          />
          <TableRow
            modName="Yungs Series"
            description="Rоллекция модов, которые добавляют улучшенные и уникальные структуры в мир Minecraft. Исследуйте новые подземелья, храмы и замки, наполненные приключениями и сокровищами!"
          />
          <TableRow
            modName="Еще 200+ модов"
            description="Мы просто не смогли бы уместить все моды, которые добавили на 1 страницу. Мы написали только основные."
          />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.features_title}>
          <span>Галерея</span>
          <div className={styles.features_header}>
            <h3>Исследуйте мир через яркие кадры!</h3>
            <p>
              Посмотрите наши скриншоты ниже и погрузитесь в мир, который мы
              создали!
            </p>
          </div>
        </div>
        <div className={styles.gallery}>
          <div className={styles.arrows}>
            <div className={styles.arrow}>
              <ChevronLeftIcon
                size={28}
                absoluteStrokeWidth
                onClick={handlePrev}
              />
            </div>
            <div className={styles.arrow}>
              <ChevronRightIcon
                size={28}
                absoluteStrokeWidth
                onClick={handleNext}
              />
            </div>
          </div>
          <div
            className={styles.slider}
            style={{ transform: `translateX(-${currentIndex * 6.25}%)` }}
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
      </div>
      <div className={styles.launcher} id="launcher">
        <div className={styles.launcher_container}>
          <div className={styles.launcher_title}>
            <div className={styles.launcher_text}>
              <h4>Загрузи наш лаунчер легко!</h4>
              <p>
                Погрузись в мир захватывающих приключений с нашим удобным,
                функциональным и надежным лаунчером!
              </p>
            </div>
            <div className={styles.launcher_buttons}>
              <Link
                href="https://github.com/alxndlk/MLauncher/releases/latest/download/Launcher.exe"
                className={styles.button}
              >
                Скачать лаунчер
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
      <div className={styles.line} />
      <div className={styles.radial} />
      <div className={styles.light} />
    </main>
  );
};
