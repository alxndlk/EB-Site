"use client";

import React from "react";
import styles from "./Main.module.css";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const Main = () => {
  const DATE = "06.04.2025";
  const NAME = "ИГРОВОЙ ВАЙП 0.2";
  const DESCRIPTION =
    "Исправленно большинство багов и дюпов, ремейк сборки и оптимизация.";

  return (
    <div className={styles.main}>
      <div className={styles.mainContainer}>
        <Link href={"/tmnext"} className={styles.backToServer}>
          <ArrowLeft />
          Вернуться на главную сервера
        </Link>
        <div className={styles.changelog}>
          <div className={styles.title}>
            <span>{DATE}</span>
            <h3>{NAME}</h3>
            <p>{DESCRIPTION}</p>
          </div>
        </div>
        <section className={styles.text}>
          <h3>
            Мир стал вдвое больше — теперь вы можете исследовать до 20 000
            блоков в ширину. Это не просто цифра — это новое пространство для
            приключений, построек и открытий. Мы вырезали всё лишнее, чтобы
            сделать ваш опыт чище и глубже.
          </h3>
          <div className={styles.update_block}>
            <h4>❌ Удалены:</h4>
            <span>
              Порой, чтобы двигаться вперёд, нужно отпустить старое. Эти моды
              были удалены в рамках оптимизации баланса, производительности и
              общей направленности проекта:
            </span>
            <div className={styles.flex}>
              <p>
                • DivineRPG — несмотря на свою масштабность, он больше не
                вписывался в концепцию мира. Мы отдали предпочтение другим
                мирам.
              </p>
              <p>
                • Industrial Foregoing — его функциональность оказалась
                избыточной и конфликтовала с атмосферой.
              </p>
              <p>• Naturalist — высокая нагрузка количеством entity.</p>
              <p>• Alex’s Mobs 2 — вторичный и дублирующий функционал..</p>
              <p>
                • More Industrial Foregoing Addons — удален вместе с Industrial
                Foregoing.
              </p>
              <p>
                • Connected Glass — визуальный мод, не критичный для игрового
                опыта.
              </p>
              <p>
                • CBMicroblocks — устаревший и конфликтующий с рядом других
                модов.
              </p>
              <p>
                • Mining Master — мешал общей концепции шахтёрского прогресса.
                Высокая нагрузка.
              </p>
              <p>• meRequester - не пользовался спросом у игроков.</p>
              <p>
                • Waystones — снижение нагрузки и усложнение игрового процесса.
              </p>
            </div>
          </div>
          <div className={styles.update_block}>
            <h4>✅ Добавлены:</h4>
            <span>
              Мы не просто удалили — мы заменили. На более глубокие,
              проработанные и атмосферные решения:
            </span>
            <div className={styles.flex}>
              <p>
                • Twilight Forest — целый новый измеренный мир с собственными
                локациями, боссами и историей. Окунись в таинственные чащи и
                древние руины.
              </p>
              <p>
                • Apotheosis — расширенные механики зачарований, мобов и
                предметов. Больше кастомизации, больше вызовов, больше RPG.
              </p>
              <p>
                • TerraBlender и Terralith — полностью переработанная генерация
                мира. Каждый биом — произведение искусства.
              </p>
              <p>
                • Кастомные структуры — теперь мир полон новых построек:
                заброшенные храмы, тайные святилища, замки, логова и многое
                другое.
              </p>
              <p>
                • Данжи в аду, в обычном мире и в Энде — каждому измерению
                добавлено новое дыхание.
              </p>
              <p>• Новые деревни — уникальные стили, жители и окружение.</p>
              <p>
                • Полностью переделанная генерация — пейзажи стали реалистичнее,
                красочнее и живее.
              </p>
            </div>
          </div>
          <div className={styles.update_block}>
            <h4>⚙️ Исправления и улучшения</h4>
            <span>
              • Исправлено более 60 дюпов: устранены все нам известные способы
              дублирования предметов, включая скрытые через автоматизацию и
              инвентари.
            </span>
            <div className={styles.flex}>
              <p>• Баг сундуков Lootr.</p>
              <p>
                • Баг с полётом в броне Gobber — больше никакого бесконечного
                парения и зависаний.
              </p>
              <p>
                • Проблемы с пчёлами — теперь они работают корректно, опыляют и
                не замирают.
              </p>
              <p>
                • Баг с регистрацией предметов — устранены ошибки, при которых
                предметы не отображались в инвентаре или пропадали после
                перезахода.
              </p>
              <p>
                • Ошибка загрузки данных при входе в мир — теперь все предметы и
                блоки корректно прогружаются без потерь или конфликтов.
              </p>
              <p>• Tаб - переделан на более компактный вид.</p>
              <p>• Наш Sidebar - отключен по просьбе игроков.</p>
            </div>
          </div>
          <div className={styles.update_block}>
            <h4>🤖 Дюпер лог</h4>
            <span>
              Отдельно спасибо игроку (разработчику в том числе) @Rect, за то,
              что реализовал полносью самописный и автоматизированный
              дюппер-лог. Теперь мы всегда получаем уведомления в наш Discord
              канал, когда кто-то дюпает.
            </span>
            <div
              className={styles.image}
              style={{ backgroundImage: `url('/mods/dupperlog.png')` }}
            />
          </div>
          <div className={styles.update_block}>
            <h4>💫 Квестовая линия</h4>
            <span>
              Теперь все квесты разделены по эпохам, а не по всему экрану. 5
              Эпох, более сбалансированные награды, более интересная развязка и
              связаны между собой задачи.
            </span>
            <div className={styles.image_container}>
              <div
                className={styles.image_contain}
                style={{ backgroundImage: `url('/mods/src_1.png')` }}
              />
              <div
                className={styles.image_contain}
                style={{ backgroundImage: `url('/mods/src_2.png')` }}
              />
              <div
                className={styles.image_contain}
                style={{ backgroundImage: `url('/mods/src_3.png')` }}
              />
              <div
                className={styles.image_contain}
                style={{ backgroundImage: `url('/mods/src_4.png')` }}
              />
              <div
                className={styles.image_contain}
                style={{ backgroundImage: `url('/mods/src_5.png')` }}
              />
            </div>
          </div>
          <div className={styles.update_block}>
            <h4>👋 Кастомные изменения</h4>
            <span>Для того, что бы вам было более удобно играть.</span>
            <div className={styles.flex}>
              <p>
                • Productive Bees - теперь не могут работать без "Блока
                Расширения", зато улей по умолчанию теперь идет с улучшением
                "Симуляция".
              </p>
              <p>
                • Более 70 новых крафтов, которые должны положительно сказаться
                на экономике сервера и пользовательского опыта.
              </p>
              <p>
                • Мы написали самописный плагин для блокировки любых дейтсвий
                любого предмета, блока, оружия и т.д.
              </p>
              <p>
                • Загадочный амулет и кольцо семи проклятий больше не оставляют
                сферы после смерти. Не забирают здоровье, не сохраняют опыт и
                предметы.
              </p>
            </div>
          </div>
          <div className={styles.update_block}>
            <h4>✨ Forge и оптимизация</h4>
            <span>Больше FPS для всех.</span>
            <div className={styles.flex}>
              <p>
                • Мы полностью отказались от Fabric в связке с Forge
                (Connector), для оптизимации и безопасности сервера. Это
                означает, что скорость загрузки клиента и сервера ускорена более
                чем в 2 раза! Больше никаких нескомпилированных классов во время
                запуска, которые решались только после перезахода в игру. Тем
                самым убирается "дырка" в безопасности сервера.
              </p>
              <p>
                • Мы пересмотрели нашу оптимизацию и смогли ее улучшить, так же
                добавили новые моды для отгрузок, отладок и т.д.
              </p>
            </div>
          </div>
          <div className={styles.update_block}>
            <h4>🔮 Новый интерфейс игры и загрузки в лаунчере</h4>
            <span>
              Время допиливать все что криво и не на своем месте. Новый
              загрузчик файлов, экран запуска игры, новые нами переписанные
              текстур-паки, шрифты, настроенные шейдеры, анимированные блоки и
              т.д.
            </span>
            <div className={styles.flex}>
              <div className={styles.image_container}>
                <div
                  className={styles.image_contain}
                  style={{ backgroundImage: `url('/mods/src_6.png')` }}
                />
                <div
                  className={styles.image_contain}
                  style={{ backgroundImage: `url('/mods/src_7.png')` }}
                />
                <div
                  className={styles.image_contain}
                  style={{ backgroundImage: `url('/mods/src_8.png')` }}
                />
                <div
                  className={styles.image_contain}
                  style={{ backgroundImage: `url('/mods/src_9.png')` }}
                />
              </div>
            </div>
          </div>
          <div className={styles.update_block}>
            <h4>🌍 Новый сайт (еще в разработке) </h4>
            <span>
              Думаем вы заметили. Он еще не готов на 100%, но разработка идет,
              всем спасибо за поддержку и помощь в разработке. Приятной игры :).
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};
