import { ChevronRight, XIcon } from "lucide-react";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useUserData } from "@/hooks/useUserData";

type ModalHeaderProps = {
  onClose: () => void;
};

export const ModalHeaader: React.FC<ModalHeaderProps> = ({ onClose }) => {
  const { data: session } = useSession();
  const { userData } = useUserData();

  return (
    <div className={styles.modalHeader}>
      <div className={styles.close}>
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
        <div className={styles.menu} onClick={onClose}>
          Меню <XIcon />
        </div>
      </div>
      <div className={styles.menu_content}>
        <div className={styles.menu_link}>
          <li>
            <Link href="/servers">Сервера</Link>
            <ChevronRight size={16} />
          </li>
          <li>
            <Link href="/donate">Донат</Link>
            <ChevronRight size={16} />
          </li>
          <li>
            <Link href="/https://discord.gg/w3ts4QTB" target="__blank">
              Дискорд
            </Link>
            <ChevronRight size={16} />
          </li>
          <li>
            <Link href="/forum" target="__blank">
              Форум
            </Link>
            <ChevronRight size={16} />
          </li>
        </div>

        <div className={styles.image_header}>
          <div className={styles.image} />
          <div className={styles.shadow} />
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
            Начать играть
          </Link>
        </div>
      </div>
    </div>
  );
};
