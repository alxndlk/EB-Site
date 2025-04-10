import { ChevronRight, XIcon } from "lucide-react";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useUserData } from "@/hooks/useUserData";
import { useEffect, useState } from "react";
import { Servers } from "./Servers";
import { useRouter } from "next/navigation";
import { FaUsers } from "react-icons/fa";
import { useServerStatus } from "@/context/ServerStatusContext";

type ModalHeaderProps = {
  onClose: () => void;
};

export const ModalHeaader: React.FC<ModalHeaderProps> = ({ onClose }) => {
  const { data: session } = useSession();
  const { userData } = useUserData();
  const [showServers, setShowServers] = useState(false);

  const router = useRouter();

  const toggleServers = () => {
    setShowServers((prev) => !prev);
  };

  const closeServers = () => {
    setShowServers(false);
  };

  const serverData = useServerStatus();

  return (
    <div className={styles.modalHeader}>
      <div className={styles.close}>
        <div className={styles.logo}>
          <Image
            width={95}
            height={46}
            src="/icons/logo.png"
            alt="Эпоха Блоков"
            className={styles.logoImage}
            onClick={() => {
              router.push("/");
            }}
          />
          <div className={styles.users_online}>
            <FaUsers size={14} color="#ffffffbf" />
            <h3>ОНЛАЙН:</h3>
            <span>{serverData?.players?.online}</span>
          </div>
        </div>
        <div className={styles.menu} onClick={onClose}>
          <XIcon />
        </div>
      </div>
      <div className={styles.menu_content}>
        <div className={styles.menu_link}>
          <li>
            <button onClick={toggleServers} className={styles.link}>
              СЕРВЕРА
            </button>
            <ChevronRight size={16} />
          </li>
          <li>
            <Link href="/rules" target="_self">
              ПРАВИЛА
            </Link>
            <ChevronRight size={16} />
          </li>
          <li>
            <Link href="/donate">ДОНАТ</Link>
            <ChevronRight size={16} />
          </li>
          <li>
            <Link href="https://discord.gg/gQxQNpYjmy" target="__blank">
              ДИСКОРД
            </Link>
            <ChevronRight size={16} />
          </li>
          <li>
            <Link href="https://t.me/+vO9cZ8FtLD85YmYy" target="__blank">
              ТЕЛЕГРАМ КАНАЛ
            </Link>
            <ChevronRight size={16} />
          </li>
          <li>
            <Link href="https://www.youtube.com/@epohablokov" target="__blank">
              YOUTUBE
            </Link>
            <ChevronRight size={16} />
          </li>
          <li>
            <Link href="https://www.tiktok.com/@epohablokov" target="__blank">
              TIKTOK
            </Link>
            <ChevronRight size={16} />
          </li>
          <li>
            <Link href="https://t.me/alxndlk" target="__blank">
              АДМИНИСТРАЦИЯ
            </Link>
            <ChevronRight size={16} />
          </li>
        </div>

        <div className={styles.buttons}>
          {session ? (
            <Link href="/profile" className={styles.profile}>
              {session.user?.name}
            </Link>
          ) : (
            <Link className={styles.button_login} href="/auth">
              Войти
            </Link>
          )}
          <Link className={styles.button} href="/">
            Скачать лаунчер
          </Link>
        </div>
      </div>
      {showServers && <Servers onClose={closeServers} />}
    </div>
  );
};
