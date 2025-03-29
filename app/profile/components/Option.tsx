import { useUserData } from "@/hooks/useUserData";
import styles from "./Option.module.css";
import { InputActive } from "@/app/ui/input";
import { ExternalLinkIcon } from "lucide-react";
import { ButtonRed } from "@/app/ui/buttonRed";
import { signOut } from "next-auth/react";
import Cookies from "js-cookie";
import { Currency } from "@/app/ui/currency";

interface IOption {
  title?: string;
  topTitle?: string;
  input?: string | number;
  value?: any;
  balance?: boolean;
  status?: keyof typeof statuses;
  links?: string[];
  bottomTitle?: string;
  button?: string;
  exitButton?: string;
  role?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  date?: string;
  loading?: string;
}

const statuses = {
  info: "ИНФО",
  danger: "ОПАСНО",
  feature: "ОПЦИЯ",
};

const socialLinks: Record<string, string> = {
  telegram: "https://t.me/+vO9cZ8FtLD85YmYy",
  discord: "https://discord.gg/gQxQNpYjmy",
};

export const Option = ({
  title,
  topTitle,
  input,
  balance,
  onClick,
  exitButton,
  value,
  status,
  links,
  button,
  disabled = false,
  date,
}: IOption) => {
  const { userData } = useUserData();

  const USER_BALANCE = Number(userData?.balance).toFixed(2);

  return (
    <div className={styles.option}>
      <div className={styles.top_text}>
        {title && (
          <h4>
            {title}{" "}
            {status && (
              <span className={styles[status]}>{statuses[status]}</span>
            )}
          </h4>
        )}
        {topTitle && <span>{topTitle}</span>}

        <div className={styles.bottom_title}>
          {input && (
            <InputActive
              placeholder={String(input)}
              margin="8px 0 0 0"
              disabled={disabled}
            />
          )}
          {value && (
            <span className={styles.balance}>
              <span className={styles.balance_value_span}>{value}</span>
              {balance && (
                <div className={styles.balance_value}>
                  {userData?.balance && USER_BALANCE}
                  <Currency />
                </div>
              )}
            </span>
          )}
          {button && (
            <button
              className={styles.button}
              style={{ cursor: disabled ? "no-drop" : "pointer" }}
              disabled={disabled}
              onClick={onClick}
            >
              {button}
            </button>
          )}

          {links && links.length > 0 && (
            <ul className={styles.links}>
              {links.map((link, index) => (
                <li key={index} className={styles.link}>
                  <a
                    href={socialLinks[link.toLowerCase()] || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link}
                  </a>
                  <ExternalLinkIcon size={14} />
                </li>
              ))}
            </ul>
          )}
          {exitButton && (
            <ButtonRed
              onClick={() => {
                Cookies.remove("user_name");
                Cookies.remove("user_email");
                signOut();
              }}
              text={exitButton}
            />
          )}
        </div>
      </div>
    </div>
  );
};
