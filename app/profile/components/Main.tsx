"use client";

import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";

import styles from "./Main.module.css";

import SkinViewerComponent from "./skinViewer";
import { Option } from "./Option";
import { SkinUploader } from "./skinChange";
import { useRouter } from "next/navigation";
import { useUserData } from "@/hooks/useUserData";

export const Main = () => {
  const { data: session } = useSession();

  const router = useRouter();
  const { userData } = useUserData();
  const [isDonated, setIsDonated] = useState<string | null>(null);

  useEffect(() => {
    if (userData?.role !== "default") {
      const expirationDate = userData?.roleExpiresAt;
      const parsedDate = new Date(expirationDate);

      // Если дата валидна, устанавливаем ее, иначе null
      setIsDonated(isNaN(parsedDate.getTime()) ? null : parsedDate);
    }
  }, [userData]);

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
            />
            <Option
              title="Донат-статус"
              topTitle="При покупке донат-статуса Вам станут доступны новые возможности во время игры в зависимости от самого донат-статуса."
              value="Текущий статус:"
              date={isDonated}
              bottomTitle="Донат-статус применяется на все сервера."
              button="Улучшить"
              status="feature"
              role={true}
              onClick={() => {
                router.push("/donate");
              }}
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
