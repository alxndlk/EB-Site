import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";

export const Navbar = ({ toggleServers }: { toggleServers: () => void }) => {
  const pathname = usePathname();

  const navigation = [
    { id: 1, title: "Сервера", path: null },
    { id: 2, title: "Донат", path: "/donate", target: "_self" },
    {
      id: 3,
      title: "Дискорд",
      path: "https://discord.gg/gQxQNpYjmy",
      target: "_blank",
    },
  ];

  return (
    <ul className={styles.ul}>
      {navigation.map(({ id, title, path, target }) => (
        <li key={id} className={styles.li}>
          {path ? (
            <Link
              href={path}
              target={target}
              className={pathname === path ? styles.link_active : styles.link}
            >
              {title}
            </Link>
          ) : (
            <button onClick={toggleServers} className={styles.link}>
              {title}
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};
