import React from "react";
import styles from "./Option.module.css";
import { InputActive } from "@/app/ui/input";
import Image from "next/image";

interface IChangeNickname {
  title?: string;
  topTitle?: string;
  input?: string;
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
  cost?: number;
}

const statuses = {
  info: "Инфо",
  danger: "Опасно",
  feature: "Опция",
};

const ChangeNickname = ({
  title,
  topTitle,
  input,
  balance,
  onClick,
  exitButton,
  role,
  value,
  status,
  cost,
  links,
  bottomTitle,
  button,
  disabled = false,
  date,
  loading,
}: IChangeNickname) => {
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
          <div className={styles.rubby_change}>
            <input placeholder={input} className={styles.input} />
            <div className={styles.rubby_holder}>
              {cost}
              <Image width={16} height={16} alt="rubby" src={"/rubby.png"} />
            </div>
          </div>
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
        </div>
      )}
    </div>
  );
};

export default ChangeNickname;
