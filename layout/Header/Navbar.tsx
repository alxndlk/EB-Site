import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { FaTelegram, FaTiktok, FaYoutube } from "react-icons/fa";

export const Navbar = ({ toggleServers }: { toggleServers: () => void }) => {
  const pathname = usePathname();
  const [isLinksOpen, setLinksOpen] = useState(false);
  const linksRef = useRef<HTMLLIElement>(null);

  const navigation = [
    { id: 1, title: "СЕРВЕРА", path: null, name: "servers" },
    { id: 2, title: "ПРАВИЛА", path: "/rules", target: "_self" },
    { id: 3, title: "ДОНАТ", path: "/donate", target: "_self" },
    { id: 4, title: "ССЫЛКИ", path: null, name: "links" },
  ];

  const additionalLinks = [
    {
      id: 1,
      title: "DISCORD",
      path: "https://discord.gg/gQxQNpYjmy",
      icon: DiscordLogoIcon,
    },
    {
      id: 2,
      title: "TELEGRAM",
      path: "https://t.me/+vO9cZ8FtLD85YmYy",
      icon: FaTelegram,
    },
    {
      id: 3,
      title: "YOUTUBE",
      path: "https://www.youtube.com/@epohablokov",
      icon: FaYoutube,
    },
    {
      id: 4,
      title: "TIKTOK",
      path: "https://www.tiktok.com/@epohablokov",
      icon: FaTiktok,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        linksRef.current &&
        !linksRef.current.contains(event.target as Node)
      ) {
        setLinksOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <ul className={styles.ul}>
      {navigation.map(({ id, title, path, target, name }) => (
        <li
          key={id}
          className={styles.li}
          ref={name === "links" ? linksRef : null}
        >
          {path ? (
            <Link
              href={path}
              target={target}
              className={pathname === path ? styles.link_active : styles.link}
            >
              {title}
            </Link>
          ) : name === "links" ? (
            <button
              onClick={() => setLinksOpen(!isLinksOpen)}
              className={styles.link}
            >
              {title}
            </button>
          ) : (
            <button onClick={toggleServers} className={styles.link}>
              {title}
            </button>
          )}

          {name === "links" && isLinksOpen && (
            <div className={styles.dropdown}>
              {additionalLinks.map(({ id, title, path, icon: Icon }) => (
                <div key={id} className={styles.dropdown_item}>
                  <Icon className={styles.icon} size={18} />
                  <a href={path} target="_blank" rel="noopener noreferrer">
                    {title}
                  </a>
                </div>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};
