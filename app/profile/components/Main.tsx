"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import "react-loading-skeleton/dist/skeleton.css";

import styles from "./Main.module.css";
import SkinViewerComponent from "./skinViewer";
import { Option } from "./Option";
import { SkinUploader } from "./skinChange";
import ChangeNickname from "./ChangeNickname";

export const Main = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const cost = 100;

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
              onClick={() => {
                router.push("/payment");
              }}
              loading={status}
            />

            {/* <ChangeNickname
              title="Сменить никнейм"
              status="feature"
              topTitle="Введите новый ник в поле ниже и нажмите кнопку подтверждения. Учтите, что ник должен соответствовать установленным правилам."
              input="Новый ник"
              cost={cost}
              bottomTitle="В случае "
              button="Сменить"
            /> */}

            <Option
              title="Почта"
              topTitle="Ваш основной адрес электронной почты будет использоваться для уведомлений, связанных с учетной записью."
              value={session?.user?.email}
              status="info"
              loading={status}
            />

            <Option
              title="Промокод"
              topTitle="Введите промокод, чтобы получить скидку на донат-группы или другие бонусы."
              bottomTitle="Промокод можно использовать только 1 раз."
              input="Напишите код"
              status="feature"
              button="Применить"
              disabled={true}
              loading={status}
            />
            <Option
              title="Стать разработчиком"
              topTitle="Вы можете узнать более подробно и пройти собеседование по ссылкам ниже."
              status="info"
              links={["Telegram", "Discord"]}
              loading={status}
            />
            <Option
              title="Выйти с аккаунта"
              topTitle="В случае утраты пароля его можно восстановить на странице авторизации."
              bottomTitle="Вы уверены, что хотите выйти?"
              exitButton="Выйти"
              status="danger"
              loading={status}
            />
          </div>
        </div>
      </div>
      <div className={styles.radialB}></div>
      <div className={styles.line}></div>
    </main>
  );
};
