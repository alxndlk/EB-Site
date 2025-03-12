import { useUserData } from "@/hooks/useUserData";
import styles from "./Option.module.css";
import { InputActive } from "@/app/ui/input";
import { ExternalLinkIcon } from "lucide-react";
import { ButtonRed } from "@/app/ui/buttonRed";
import { signOut } from "next-auth/react";
import Skeleton from "react-loading-skeleton";
import Image from "next/image";

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
  onClick?: () => void;
  date?: string | null;
  loading?: string;
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
  onClick,
  exitButton,
  role,
  value,
  status,
  links,
  bottomTitle,
  button,
  disabled = false,
  date,
  loading,
}: IOption) => {
  const { userData } = useUserData();

  const generateLink = (name: string) => {
    switch (name.toLowerCase()) {
      case "telegram":
        return "https://t.me/+vO9cZ8FtLD85YmYy";
      case "discord":
        return "https://discord.gg/gQxQNpYjmy";
      default:
        return "#";
    }
  };

  if (loading == "loading") {
    return (
      <div>
        <Skeleton
          height={164}
          baseColor="transparent"
          borderRadius={10}
          highlightColor="#ffffff1a"
        >
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
                    <div className={styles.balance_value}>
                      {`${(userData?.balance ?? 0).toLocaleString("ru-RU", {
                        style: "decimal",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}`}
                      <Image
                        width={16}
                        height={16}
                        alt="rubby"
                        src={"/rubby.png"}
                      />
                    </div>
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
              {date && (
                <div className={styles.date}>
                  Донат-статус действителен до{" "}
                  {new Date(date).toLocaleDateString()}.
                </div>
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
                    onClick={onClick}
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
        </Skeleton>
      </div>
    );
  }

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
              <div className={styles.balance_value}>
                {`${(userData?.balance ?? 0).toLocaleString("ru-RU", {
                  style: "decimal",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`}
                <Image width={16} height={16} alt="rubby" src={"/rubby.png"} />
              </div>
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
        {date && (
          <div className={styles.date}>
            Донат-статус действителен до {new Date(date).toLocaleDateString()}.
          </div>
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
              onClick={onClick}
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
