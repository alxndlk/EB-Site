/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUserData } from "@/hooks/useUserData";
import styles from "./Option.module.css";
import { InputActive } from "@/app/ui/input";
import { ExternalLinkIcon } from "lucide-react";
import { ButtonRed } from "@/app/ui/buttonRed";
import { signOut } from "next-auth/react";

interface IOption {
  title?: string;
  topTitle?: string;
  input?: string | number | undefined;
  value?: any;
  balance?: true;
  status?: keyof typeof statuses;
  links?: Array<string>;
  bottomTitle?: string;
  button?: string;
  exitButton?: string;
  role?: boolean;
  disabled?: boolean;
}

const statuses = {
  info: "Инфо",
  danger: "Опасно",
  feature: "Опция",
};

export const Option = ({
  title,
  topTitle,
  input,
  balance,
  exitButton,
  role,
  value,
  status,
  links,
  bottomTitle,
  button,
  disabled = false,
}: IOption) => {
  const { userData } = useUserData();

  const generateLink = (name: string) => {
    switch (name.toLowerCase()) {
      case "telegram":
        return "https://t.me/yourchannel";
      case "discord":
        return "https://discord.gg/yourserver";
      default:
        return "#";
    }
  };

  return (
    <div className={styles.option}>
      <div className={styles.top_text}>
        {title && (
          <h4>
            {title}
            {status && statuses[status] && (
              <span className={styles[status]}>{statuses[status]}</span>
            )}
          </h4>
        )}
        {topTitle && <span>{topTitle}</span>}
        {input && (
          <InputActive
            placeholder={input}
            margin="8px 0px 0px 0px"
            disabled={disabled}
          />
        )}
        {value && (
          <span className={styles.balance}>
            {value}
            {balance && (
              <div className={styles.balance_value}>{`${(
                userData?.balance ?? 0
              ).toLocaleString("ru-RU", {
                style: "decimal",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })} ₽`}</div>
            )}
            {role && userData?.role && (
              <div
                className={`${styles.role} ${
                  styles[userData.role.toLowerCase()]
                }`}
              >
                {userData.role.toUpperCase()}
              </div>
            )}
          </span>
        )}
        {links && links.length > 0 && (
          <ul className={styles.links}>
            {links.map((link, index) => (
              <li key={index} className={styles.link}>
                <a href={generateLink(link)} target="_blank">
                  {link}
                </a>
                <ExternalLinkIcon size={14} />
              </li>
            ))}
          </ul>
        )}
      </div>
      {(bottomTitle || button || exitButton) && (
        <div className={styles.bottom_text}>
          {bottomTitle && <p>{bottomTitle}</p>}
          {button && (
            <button
              className={styles.button}
              style={disabled ? { cursor: "no-drop" } : {}}
              disabled={disabled}
            >
              {button}
            </button>
          )}
          {exitButton && (
            <ButtonRed onClick={() => signOut()} text={exitButton} />
          )}
        </div>
      )}
    </div>
  );
};
