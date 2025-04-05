"use client";

import React, { useEffect, useState } from "react";
import ReusableIcon from "./ReusableIcon";
import styles from "../Main.module.css";
import { EyeOpenIcon } from "@radix-ui/react-icons";

interface IStatus {
  text: string;
  icons: Array<"check" | "xmark" | "none">;
  spanText?: string;
  kit?: boolean;
  src?: string;
  visible?: boolean;
}

export const Modal: React.FC<{
  src: string;
  text: string;
  onClose: () => void;
}> = ({ src, text, onClose }) => {
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
  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.container_modal}>
        <div className={styles.content_modal}>
          <div className={styles.title_modal}>{text}</div>
          <div
            className={styles.image_modal}
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export const Status: React.FC<IStatus> = ({
  text,
  spanText,
  icons,
  kit,
  src,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const iconClasses = [
    styles.specialIcon0,
    styles.specialIcon1,
    styles.specialIcon2,
    styles.specialIcon3,
    styles.specialIcon4,
  ];

  return (
    <div>
      {isModalOpen && src && (
        <Modal src={src} text={text} onClose={closeModal} />
      )}
      <div className={styles.donate_table_skills}>
        <div className={styles.donate_table_skills_name}>
          {text}
          {spanText && <span>{spanText}</span>}
        </div>
        <div className={styles.donate_table_skill}>
          {icons.map((iconType, index) => {
            const iconClass = iconClasses[index] || styles.skill_status;
            const color =
              iconType === "check"
                ? "lime"
                : iconType === "none"
                ? "transparent"
                : "gray";

            return (
              <div key={index} className={iconClass}>
                <ReusableIcon type={iconType} color={color} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
