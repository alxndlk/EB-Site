'use client';

import styles from './Main.module.css';


export const SkinUploader: React.FC = () => {

  return (
    <div className={`${styles.avatar} `}>
        <div className={styles.text}>
            <div className={styles.title_text}>
                <h4>Скин</h4>
                <span className={styles.optional}>Опция</span>
            </div>
            <div className={styles.paragraph}>
                <p>Установить скин</p>
            </div>
        </div>
        <div className={`${styles.title_skin}`}><button className={styles.apply}>Применить</button><button className={styles.apply}>Применить</button></div>
    </div>
  );
};
