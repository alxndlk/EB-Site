'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

import components from '@/app/ui';
import styles from './Main.module.css';
import { FaDiscord, FaTelegram } from 'react-icons/fa';
import { ArrowRightCircle, ExternalLink, PlusCircleIcon } from 'lucide-react';
const { InputActive, ButtonRed } = components;

import SkinViewerComponent from './skinViewer';
import { SkinUploader } from './skinChange';
import { useUserData } from '@/hooks/useUserData';


export const Main = () => {

  const { userData } = useUserData();
  const { data: session } = useSession();
  

  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <div className={styles.row_header}>
          С возвращением,{" "}
          {session?.user?.name ? (
            <span>{session.user.name}!</span>
          ) : (
            <span>...</span>
          )}

          {userData?.active ? (
          <span className={styles.status_active}>
            Активен
          </span>
          ) : (
          <span className={styles.status_banned}>
            Забанен
          </span>
          )}

        </div>
      </div>
      <div className={styles.profile_padding}>
        <div className={styles.row}>
          <div className={styles.skin}>
            <div className={styles.profile_data}>
              <SkinViewerComponent/>
            </div>
            <SkinUploader/>
          </div>
          <div className={styles.stats}>
            <div className={`${styles.avatar_balance} `}>
              <div className={styles.text}>
                <div className={styles.title_text}>
                  <h4>Баланс</h4>
                  <span className={styles.info}>Инфо</span>
                </div>
                <div className={styles.paragraph}>
                  <p>Используйте свой баланс для того, чтобы покупать предметы и донат-статусы.</p>
                </div>
                <div className={`${styles.input_balance}`}>
                  Ваш баланс:
                  <div className={styles.donate_group}>
                    {userData?.balance
                      ? userData.balance.toLocaleString('ru-RU', {
                          style: 'decimal',
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      : 'Загрузка...'}{' '}
                    ₽
                  </div>
                </div>
              </div>
              <div className={`${styles.title_balance} justify-between`}>
                Средства не подлежат ограничению по сроку использования.
                <Link href="/donate" className={styles.up_group}>
                  Пополнить
                  <PlusCircleIcon size={16} />
                </Link>
              </div>
            </div>

            <div className={`${styles.avatar} `}>
              <div className={styles.text}>
                <div className={styles.title_text}>
                  <h4>Донат-статус</h4>
                  <div className={styles.donate_group}>{userData?.role || 'Загрузка...'}</div>
                </div>
              </div>
              <div className={`${styles.title} justify-between`}>
                Донат-статус применяется на все сервера.
                <Link href="/donate" className={styles.up_group}>
                  Прокачать группу
                  <ArrowRightCircle size={16} />
                </Link>
              </div>
            </div>

            <div className={`${styles.avatar} `}>
              <div className={styles.text}>
                <div className={styles.title_text}>
                  <h4>Почта</h4>
                  <span className={styles.info}>Инфо</span>
                </div>
                <div className={styles.paragraph}>
                  <p>Ваш основной адрес электронной почты будет использоваться для уведомлений, связанных с учетной записью.</p>
                </div>
                <div className={styles.input}>
                  {session?.user?.email}
                  <span className={styles.status}>Основная</span>
                </div>
              </div>
              <div className={styles.title}>Почту для входа в учетную запись нельзя изменить.</div>
            </div>

            <div className={`${styles.avatar} `}>
              <div className={styles.text}>
                <div className={styles.title_text}>
                  <h4>Промокод</h4>
                  <span className={styles.optional}>Опция</span>
                </div>
                <div className={styles.paragraph}>
                  <p>Введите промокод, чтобы получить скидку на донат-группы или другие бонусы.</p>
                </div>
                <InputActive width="big" />
              </div>
              <div className={`${styles.title} justify-between`}>
                Промокод можно использовать только 1 раз.
                <button className={styles.apply}>Применить</button>
              </div>
            </div>

            <div className={`${styles.avatar} `}>
              <div className={styles.text}>
                <div className={styles.title_text}>
                  <h4>Стать разработчиком</h4>
                  <span className={styles.info}>Инфо</span>
                </div>
                <div className={styles.paragraph}>
                  <p>Вы можете узнать более подробно и пройти собеседование по ссылкам ниже.</p>
                </div>
                <div className="flex gap-3">
                  <div className={styles.link_container}>
                    <FaTelegram /> Телеграм
                  </div>
                  <div className={styles.link_container}>
                    <FaDiscord /> Дискорд
                  </div>
                </div>
              </div>
              <div className={styles.title}>
                Узнать больше тут:
                <a href="/" className={styles.link}>
                  Наша команда
                  <ExternalLink absoluteStrokeWidth size={18} />
                </a>
              </div>
            </div>

            <div className={styles.log_out_container}>
              <div className={styles.log_out_content}>
                <div className={styles.title_text}>
                  <h4>Выйти с аккаунта</h4>
                  <span className={styles.danger}>Опасно</span>
                </div>
                <div className={styles.paragraph}>
                  <p>В случае утраты пароля его можно восстановить на странице авторизации.</p>
                </div>
              </div>
              <div className={styles.log_out_button}>
                <ButtonRed onClick={() => signOut()} text="Выйти с аккаунта" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
