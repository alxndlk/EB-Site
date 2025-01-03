"use client";

import { useSession } from "next-auth/react";

import styles from "./Main.module.css";

import SkinViewerComponent from "./skinViewer";
import { Option } from "./Option";
import { SkinUploader } from "./skinChange";

export const Main = () => {
  const { data: session } = useSession();

  return (
    <main className={styles.profile}>
      <div className={styles.profile_padding}>
        <div className={styles.flex_holder}>
          <div className={styles.skin_holder}>
            <div className={styles.skin_container}>
              <div className={styles.skin}>
                <SkinViewerComponent />
              </div>
            </div>
            <div className={styles.skin_uploader}>
              <SkinUploader />
            </div>
          </div>
          <div className={styles.options}>
            <Option
              title="Баланс"
              topTitle="Используйте свой баланс для того, чтобы покупать предметы и донат-статусы."
              value="Ваш баланс: "
              balance={true}
              bottomTitle="Средства не подлежат ограничению по сроку использования."
              button="Пополнить"
              status="feature"
            />
            <Option
              title="Донат-статус"
              topTitle="При покупке донат-статуса Вам станут доступны новые возможности во время игры в зависимости от самого донат-статуса."
              value="Текущий статус: "
              bottomTitle="Донат-статус применяется на все сервера."
              button="Улучшить"
              status="feature"
              role={true}
            />
            <Option
              title="Почта"
              topTitle="Ваш основной адрес электронной почты будет использоваться для уведомлений, связанных с учетной записью."
              value={session?.user?.email}
              status="info"
            />
            <Option
              title="Промокод"
              topTitle="Введите промокод, чтобы получить скидку на донат-группы или другие бонусы."
              bottomTitle="Промокод можно использовать только 1 раз."
              input="Напишите код"
              status="feature"
              button="Применить"
              disabled={true}
            />
            <Option
              title="Стать разработчиком"
              topTitle="Вы можете узнать более подробно и пройти собеседование по ссылкам ниже."
              status="info"
              links={["Telegram", "Discord"]}
            />
            <Option
              title="Выйти с аккаунта"
              topTitle="В случае утраты пароля его можно восстановить на странице авторизации."
              bottomTitle="Вы уверены, что хотите выйти?"
              exitButton="Выйти"
              status="danger"
            />
          </div>
        </div>
      </div>
      <div className={styles.radialB}></div>
      <div className={styles.line}></div>
    </main>
  );
};
