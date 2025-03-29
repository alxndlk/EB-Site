import React, { useEffect } from "react";
import styles from "./Servers.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { ChevronRight } from "lucide-react";

interface ServersProps {
  onClose: () => void;
}

export const Servers: React.FC<ServersProps> = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const router = useRouter();

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.servers}>
        <div className={styles.holder}>
          <div className={styles.help}>
            <div className={styles.title}>КАКИЕ СЕРВЕРА ЕСТЬ?</div>
            <div className={styles.description}>
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
                    <h4>
                      Техно-Магия: Next <span>1.20.1</span>
                    </h4>
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
                    <h4>
                      Классика +<span>1.20.1</span>
                    </h4>
                    <p>Улучшенная классика с новой графикой и оптимизацией.</p>
                  </div>
                </div>
                <button>
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
                    src="/icons/ae2.png"
                    className={styles.server_logo}
                    quality={100}
                  />
                  <div className={styles.server_text}>
                    <h4>
                      Технария<span>1.20.1</span>
                    </h4>
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
            <Link href="https://t.me/alxndlk">
              <FaDiscord />
              Дискорд в помощь!
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
