import React, { useEffect } from "react";
import styles from "./Servers.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
        <div className={styles.container}>
          <div
            className={styles.donate}
            onClick={() => {
              router.push("/donate");
            }}
          >
            <h4>Стань куда круче с</h4>
            <p>ДОНАТ-СТАТУС</p>
            <Image
              src="/vip_picture.png"
              alt="Minecraft Title"
              width={300}
              quality={100}
              height={300}
              className={styles.image}
            />
          </div>
          <div
            className={styles.content}
            onClick={() => {
              router.push("/tmnext");
            }}
          >
            <div className={styles.shadow} />
            <div className={styles.text}>
              <div className={styles.title}>
                <h4>ТЕХНО-МАГИЯ: NEXT</h4>
                <span>1.20.1</span>
              </div>
              <div className={styles.holder}>
                <span className={styles.mTitle}>
                  Погрузись в мир сложных технологий!
                </span>
                <p>НА СЕРВЕРЕ 384 ИГРОКА</p>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.shadow} />
            <div className={styles.text}>
              <div className={styles.title}>
                <h4>ТЕХНАРИЯ</h4>
                <span>1.19.2</span>
              </div>
              <div className={styles.holder}>
                <p>НА CТАДИИ РАЗРАБОТКИ</p>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.shadow} />
            <div className={styles.text}>
              <div className={styles.title}>
                <h4>КЛАССИКА +</h4>
                <span>1.21.4</span>
              </div>
              <div className={styles.holder}>
                <p>НА CТАДИИ РАЗРАБОТКИ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
