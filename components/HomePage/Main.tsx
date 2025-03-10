import {
  ChevronLeftIcon,
  ChevronRight,
  ChevronRightIcon,
  PlayCircleIcon,
} from "lucide-react";
import styles from "./Main.module.css";
import Image from "next/image";
import { ImageRow } from "./ImageRow";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Servers } from "./../../layout/Header/Servers";

export const Main = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      const viewportHeight = document.documentElement.clientHeight;

      setScrolled(scrollPosition > viewportHeight * 0.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const urlArray = [
    "/Home/sky.png",
    "/Home/terrain.png",
    "/Home/terrain_2.png",
    "/Home/terrain_3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showServers, setShowServers] = useState(false);

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

  const toggleServers = () => {
    setShowServers((prev) => !prev);
  };

  const closeServers = () => {
    setShowServers(false);
  };

  const router = useRouter();

  return (
    <main className={styles.main}>
      <div className={styles.top_main}>
        <div className={styles.top_main_content}>
          <video muted loop autoPlay className={styles.video} playsInline>
            <source src="/videos/video.mp4" type="video/mp4" />
          </video>
          <div className={styles.video_overllay} />
          <div className={styles.video_bottom} />
          <div className={styles.top_main_content_title}>
            <div className={styles.aviable}>
              <Image
                src="/anvil.gif"
                alt="anvil"
                width={40}
                height={40}
                unoptimized
              />
              <div className="flex flex-col items-start">
                <span>Эпоха Блоков</span>
                <p>Техно-Магия: Next уже доступна!</p>
              </div>
            </div>
            <div className={styles.title}>
              <h4>Лучшие сервера Minecraft с модами</h4>
            </div>
            <div className={styles.paragraph}>
              <p>
                Добро пожаловать в мир безграничных возможностей! Исследуйте и
                создавайте вместе с нами.
              </p>
            </div>
            <div className={styles.links}>
              <Link className={styles.start_play} href="#launcher">
                Начать играть
              </Link>
              <a
                className={styles.watch_trailer}
                href="https://www.youtube.com/@epohablokov/videos"
                target="__blank"
              >
                <PlayCircleIcon size={16} />
                Смотреть трейлер
              </a>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.radial}></div>
        <div className={styles.light}></div>
      </div>

      <div className={`${styles.images_container}`}>
        <div className={styles.sticky_text}>
          <div className={styles.text_sticky}>
            <h4>Ваша галерея</h4>
            <p>Лучшие снимки игроков попадут сюда.</p>
          </div>
        </div>
        <div
          className={`${styles.image_blocks} ${
            scrolled ? styles.scrolled : ""
          }`}
        >
          <ImageRow
            images={[
              { src: "/Home/1.png", height: "300px" },
              { src: "/Home/2.png", height: "350px" },
              { src: "/Home/3.png", height: "500px" },
              { src: "/Home/4.png", height: "300px" },
            ]}
          />
          <ImageRow
            images={[
              { src: "/Home/5.png", height: "350px" },
              { src: "/Home/6.png", height: "450px" },
              { src: "/Home/15.png", height: "300px" },
              { src: "/Home/20.png", height: "350px" },
            ]}
          />
          <ImageRow
            images={[
              { src: "/Home/9.png", height: "250px" },
              { src: "/Home/10.png", height: "350px" },
              { src: "/Home/11.png", height: "600px" },
              { src: "/Home/12.png", height: "250px" },
            ]}
          />
          <ImageRow
            images={[
              { src: "/Home/13.png", height: "400px" },
              { src: "/Home/14.png", height: "300px" },
              { src: "/Home/7.png", height: "450px" },
              { src: "/Home/16.png", height: "300px" },
            ]}
          />
          <ImageRow
            images={[
              { src: "/Home/17.png", height: "200px" },
              { src: "/Home/18.png", height: "450px" },
              { src: "/Home/19.png", height: "300px" },
              { src: "/Home/8.png", height: "500px" },
            ]}
          />
        </div>

        <div className={styles.image_bottom} />
        <div className={styles.image_text}>
          <div className={styles.text_padding}>
            <div className={styles.text_content}>
              <div className={styles.logo}>
                <Image
                  width={24}
                  height={24}
                  src="/logo-top.png"
                  alt="Эпоха Блоков"
                  className={styles.logoImage}
                />
                <Link href="/" className={styles.link}>
                  Эпоха Блоков
                </Link>
              </div>
              <span>
                Уникальные и современные серверы Minecraft, созданные командой
                Эпохи Блоков.
              </span>
            </div>
            <button
              onClick={() => {
                router.push("/tmnext");
              }}
            >
              Подробнее
            </button>
          </div>
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.features_title}>
          <span>Особенности</span>
          <div className={styles.features_header}>
            <h3>Создай свой мир с полным набором инструментов!</h3>
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
                <h4>Новая геренация</h4>
                <p>
                  Уникальная генерация ландшафта, неизведанные биомы и
                  захватывающие приключения ждут тебя на нашем сервере!
                </p>
              </div>
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
                <h4>Новые пещеры</h4>
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
                border: "1px solid rgb(0, 39, 24)",
                background:
                  "radial-gradient(100% 64% at 50% 100%, #002618 0%, rgb(0, 0, 0) 100%)",
              }}
            >
              <div className={styles.block_header}>
                <h4>Оптимизация</h4>
                <p>
                  Повышенная производительность, стабильность и плавный игровой
                  процесс без лагов!
                </p>
              </div>
              <div className={`${styles.optimization}`}>
                <h3>Использование ресурсов</h3>
                <div className={styles.circles}>
                  <div className={styles.circle_container}>
                    <div className={styles.circle}>
                      <div className={styles.circleBlock}>4-5 ГБ</div>
                    </div>
                    <p>Память</p>
                  </div>
                  <div className={styles.circle_container}>
                    <div className={styles.circle} style={{ width: "140px" }}>
                      <div className={styles.circleBlock}>40-60 %</div>
                    </div>
                    <p>Процессор</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.block_header}>
                <h4>Новые моды</h4>
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
                <h4>Анимированные текстуры</h4>
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
                <h4>Новые шрифты и GUI</h4>
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
      <div className={styles.servers}>
        <div className={styles.servers_title}>
          <span>Игровые сервера</span>
          <div className={styles.servers_header}>
            <h3>Уникальные игровые сервера на любой вкус!</h3>
            <p>
              Исследуй миры, созданные для любого стиля игры — от знакомой
              классики до тяжелых технологий и космоса!
            </p>
          </div>
        </div>
        <div className={styles.servers_container}>
          <div
            className={styles.server}
            style={{
              backgroundImage: `url('/Home/6.png')`,
              backgroundPosition: "50%",
            }}
          >
            <div className={styles.server_style}>
              <div className={styles.server_text}>
                <h4>Техно-Магия: Next</h4>1.20.1
              </div>
              <p>Погрузись в мир сложных технологий!</p>
              <button onClick={toggleServers}>
                Начать играть <ChevronRight size={18} />
              </button>
            </div>
            <div className={styles.shadow}></div>
          </div>
          <div
            className={styles.server}
            style={{
              backgroundImage: `url('/Home/10.png')`,
              backgroundPosition: "50%",
            }}
          >
            <div className={styles.server_style}>
              <div className={styles.server_text}>
                <h4>Технария</h4>1.19.2
              </div>
              <p>Оптимизация, механизмы, инновации для технической игры.</p>
              <button onClick={toggleServers}>
                Начать играть <ChevronRight size={18} />
              </button>
            </div>
            <div className={styles.shadow}></div>
          </div>
          <div
            className={styles.server}
            style={{
              backgroundImage: `url('/Home/17.png')`,
              backgroundPosition: "50%",
            }}
          >
            <div className={styles.server_style}>
              <div className={styles.server_text}>
                <h4>Классика +</h4>1.21.4
              </div>
              <p> улучшенная классика с новыми возможностями и оптимизацией.</p>
              <button onClick={toggleServers}>
                Начать играть <ChevronRight size={18} />
              </button>
            </div>
            <div className={styles.shadow}></div>
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
              <Link href="/Эпоха Блоков.exe" className={styles.button}>
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
      {showServers && <Servers onClose={closeServers} />}
    </main>
  );
};
