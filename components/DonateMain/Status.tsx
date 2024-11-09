"use client";

import React, { useState } from 'react';
import ReusableIcon from './ReusableIcon';
import styles from './DonateMain.module.css';
import { EyeOpenIcon } from '@radix-ui/react-icons';
import { XIcon } from 'lucide-react';

interface IStatus {
  text: string;
  icons: Array<'check' | 'xmark' | 'none'>;
  spanText?: string;
  kit?: boolean;
  src?: string;
  visible?: boolean;
}

const Modal: React.FC<{ src: string; text: string; onClose: () => void }> = ({ src, text, onClose }) => {
  return (
    <div className={`${styles.modalOverlay}`}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <div>{text}</div>
          <button onClick={onClose} className={styles.closeButton}>
            <XIcon color='white'/>
          </button>
        </div>
        <div className={styles.modalContent}>
          <div className={styles.kit_image} style={{ backgroundImage: `url(${src})` }}></div>
        </div>
      </div>
    </div>
  );
};

export const Status: React.FC<IStatus> = ({ text, spanText, icons, kit, src, visible }) => {
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
    <div className={styles.donate_table_skills}>
      <div className={styles.donate_table_skills_name}>
        {kit && <EyeOpenIcon className="cursor-pointer" color="white" onClick={openModal} />}
        {text}
        {spanText && <span>{spanText}</span>}
      </div>
      <div className={styles.donate_table_skill}>
        {icons.map((iconType, index) => {
          const iconClass = iconClasses[index] || styles.skill_status;
          const color = iconType === 'check' ? 'lime' : iconType === 'none' ? 'transparent' : 'gray';

          return (
            <div key={index} className={iconClass}>
              <ReusableIcon type={iconType} color={color} />
            </div>
          );
        })}
      </div>

      {isModalOpen && src && (
        <Modal src={src} text={text} onClose={closeModal} />
      )}
    </div>
  );
};
