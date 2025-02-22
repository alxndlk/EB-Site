import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { ArrowRight, ExternalLink, LinkIcon } from "lucide-react";

export const Navbar = ({ toggleServers }: { toggleServers: () => void }) => {
  const pathname = usePathname();
  const [isLinksOpen, setLinksOpen] = useState(false);
  const linksRef = useRef<HTMLLIElement>(null);

  const navigation = [
    { id: 1, title: "Сервера", path: null, name: "servers" },
    { id: 2, title: "Правила", path: "/rules", target: "_blank" },
    { id: 3, title: "Донат", path: "/donate", target: "_self" },
    { id: 4, title: "Ссылки", path: null, name: "links" },
  ];

  const additionalLinks = [
    { id: 1, title: "Discord", path: "https://discord.gg/gQxQNpYjmy" },
    { id: 2, title: "Telegram", path: "https://t.me/+vO9cZ8FtLD85YmYy" },
    { id: 3, title: "YouTube", path: "https://www.youtube.com/@epohablokov" },
    { id: 4, title: "TikTok", path: "https://www.tiktok.com/@epohablokov" },
    { id: 5, title: "Администрация", path: "https://t.me/alxndlk" },
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
              {additionalLinks.map(({ id, title, path }) => (
                <a
                  key={id}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.dropdown_item}
                >
                  {title}
                  <ExternalLink size={14} />
                </a>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};
