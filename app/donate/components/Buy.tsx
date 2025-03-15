"use client";

import React, { useEffect, useState } from "react";
import styles from "./Buy.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight, Check, XIcon } from "lucide-react";
import { FaExclamation } from "react-icons/fa";
import { useUserData } from "@/hooks/useUserData";

interface BuyProps {
  onClose: () => void;
  imageURL: string;
  priceStatus: string;
  PERMISSION_NAME: string;
  bg_color: string;
}

export const Buy: React.FC<BuyProps> = ({
  onClose,
  imageURL,
  PERMISSION_NAME,
  priceStatus,
  bg_color,
}) => {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");
  const [result, setResult] = useState<
    "success" | "failure" | "warning" | "none"
  >("none");
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const [serverName, setServerName] = useState<undefined | string>(undefined);
  const [serverNumber, setServerNumber] = useState<null | number>(null);
  const [serverDatabaseName, setServerDatabaseName] =
    useState<string>(undefined);
  const [dataToBuy, setDataToBuy] = useState({
    days: 0,
    price: 0,
  });

  const SERVER_DATABASE_ARRAY = ["Техно-Магия: Next", "Технария", "Классика +"];

  const { userData, pending } = useUserData();
  const [userUuid, setUserUuid] = useState(userData?.uuid || "");

  const USER_UUID = userUuid;

  useEffect(() => {
    setUserUuid(userData?.uuid || "");
  }, [userData]);

  const PERMISSION_PRICE = dataToBuy.price;
  const PERMISSION_DURATION = dataToBuy.days;

  const handleOnClick = async () => {
    try {
      const response = await fetch("/api/permission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          permission_price: PERMISSION_PRICE,
          permission_name: PERMISSION_NAME,
          user_uuid: USER_UUID,
          user_name: userData?.username,
          permission_duration: PERMISSION_DURATION,
          server: serverName,
          server_number: serverNumber,
          //
          RCON_HOST: process.env.RCON_HOST,
          RCON_PORT: process.env.RCON_PORT,
          RCON_PASSWORD: process.env.RCON_PASWWORD,
          //
        }),
      });
      const RESPONSE_RESULT = await response.json();

      if (response.ok) {
        setResult("success");
        setErrorMessage("");
      } else {
        setResult("failure");
        setErrorMessage(
          RESPONSE_RESULT.error || "Произошла неизвестная ошибка"
        );
      }

      if (RESPONSE_RESULT.code === "ROLE_DOWNGRADE_NOT_ALLOWED") {
        setResult("warning");
      }
    } catch (error) {
      setResult("failure");
      setErrorMessage(error instanceof Error ? error.message : "Ошибка сети");
    }
  };

  useEffect(() => {
    if (errorMessage) {
      setErrorMessage(errorMessage);
      console.log(errorMessage);
    }
  }, [errorMessage]);

  return (
    <div
      className={styles.overlay}
      onClick={handleOverlayClick}
      style={{
        background: `linear-gradient(
    90deg,
    rgba(2, 0, 36, 0.6) 0%,
    ${bg_color} 200%
  )`,
      }}
    >
      <div className={styles.servers}>
        <div className={styles.container}>
          {result == "none" && (
            <div
              className={styles.donate}
              onClick={() => {
                router.push("/donate");
              }}
            >
              <div className={styles.top} style={{ backgroundColor: bg_color }}>
                <div className={styles.holder_top}>
                  <h4>Купить статус</h4>
                  <p>{PERMISSION_NAME}</p>
                </div>
                <Image
                  src={imageURL}
                  alt={`/vip_picture.png Image`}
                  width={400}
                  quality={100}
                  height={400}
                  className={styles.image}
                />
              </div>

              {serverName == undefined && serverNumber == null && (
                <div className={styles.server}>
                  <div
                    className={styles.buy_holder}
                    onClick={() => {
                      setServerName(SERVER_DATABASE_ARRAY[0]);
                    }}
                  >
                    <div className={styles.text_info}>
                      <p>{SERVER_DATABASE_ARRAY[0]}</p>
                    </div>
                    <ArrowRight size={64} />
                  </div>
                  <div
                    className={`${styles.buy_holder} ${styles.disabled}`}
                    onClick={() => {
                      // setServerName(SERVER_DATABASE_ARRAY[1]);
                    }}
                  >
                    <div className={styles.text_info}>
                      <p>{SERVER_DATABASE_ARRAY[1]}</p>
                    </div>
                    <ArrowRight size={64} />
                  </div>
                  <div
                    className={`${styles.buy_holder} ${styles.disabled}`}
                    onClick={() => {
                      // setServerName(SERVER_DATABASE_ARRAY[2]);
                    }}
                  >
                    <div className={styles.text_info}>
                      <p>{SERVER_DATABASE_ARRAY[2]}</p>
                    </div>
                    <ArrowRight size={64} />
                  </div>
                </div>
              )}

              {serverName == SERVER_DATABASE_ARRAY[0] &&
                serverNumber === null && (
                  <div className={styles.bottom}>
                    <div
                      className={styles.buy_holder}
                      onClick={() => {
                        setServerNumber(1);
                      }}
                    >
                      <div className={styles.text_info}>
                        <span>TM: Next</span>
                        <p>Сервер #1</p>
                      </div>
                    </div>
                    <div
                      className={`${styles.buy_holder} ${styles.disabled}`}
                      onClick={() => {
                        setServerNumber(null);
                      }}
                    >
                      <div className={styles.text_info}>
                        <span>TM: Next</span>
                        <p>Сервер #2</p>
                      </div>
                    </div>
                    <div
                      className={`${styles.buy_holder} ${styles.disabled}`}
                      onClick={() => {
                        setServerNumber(null);
                      }}
                    >
                      <div className={styles.text_info}>
                        <span>TM: Next</span>
                        <p>Сервер #3</p>
                      </div>
                    </div>
                  </div>
                )}

              {serverName == SERVER_DATABASE_ARRAY[1] &&
                serverNumber === null && (
                  <div className={styles.bottom}>
                    <div
                      className={styles.buy_holder}
                      onClick={() => {
                        setServerNumber(1);
                      }}
                    >
                      <div className={styles.text_info}>
                        <span>Технария</span>
                        <p>Сервер #1</p>
                      </div>
                    </div>
                    <div
                      className={`${styles.buy_holder} ${styles.disabled}`}
                      onClick={() => {
                        setServerNumber(null);
                      }}
                    >
                      <div className={styles.text_info}>
                        <span>Технария</span>
                        <p>Сервер #2</p>
                      </div>
                    </div>
                  </div>
                )}

              {serverName == SERVER_DATABASE_ARRAY[2] &&
                serverNumber === null && (
                  <div className={styles.bottom}>
                    <div
                      className={styles.buy_holder}
                      onClick={() => {
                        setServerNumber(1);
                      }}
                    >
                      <div className={styles.text_info}>
                        <span>Классика +</span>
                        <p>Сервер #1</p>
                      </div>
                    </div>
                  </div>
                )}

              {dataToBuy.days == 0 &&
                dataToBuy.price == 0 &&
                serverName != undefined &&
                serverNumber !== null && (
                  <div className={styles.bottom}>
                    <div
                      className={styles.buy_holder}
                      onClick={() => {
                        setDataToBuy({
                          days: 30,
                          price: Number(
                            Number(priceStatus.replace(/[^\d.]/g, "")).toFixed(
                              1
                            )
                          ),
                        });
                      }}
                    >
                      <div className={styles.text_info}>
                        <span>Купить на 30 дней.</span>
                        <p id="price30" className={styles.price_holder}>
                          за{" "}
                          {Number(priceStatus.replace(/[^\d.]/g, "")).toFixed(
                            1
                          )}
                          <Image
                            width={36}
                            height={36}
                            alt="rubby"
                            className={styles.rubby}
                            src={"/rubby.png"}
                          />{" "}
                          / мес.
                        </p>
                      </div>
                      <ArrowRight size={64} />
                    </div>
                    <div
                      className={styles.buy_holder}
                      onClick={() => {
                        setDataToBuy({
                          days: 90,
                          price: Number(
                            (
                              Number(priceStatus.replace(/[^\d.]/g, "")) * 2.4
                            ).toFixed(1)
                          ),
                        });
                      }}
                    >
                      <div className={styles.text_info}>
                        <span>Купить на 3 месяца.</span>
                        <p className={styles.price_holder}>
                          за{" "}
                          {(
                            Number(priceStatus.replace(/[^\d.]/g, "")) * 2.4
                          ).toFixed(1)}
                          <Image
                            width={36}
                            height={36}
                            alt="rubby"
                            className={styles.rubby}
                            src={"/rubby.png"}
                          />
                          / 3 мес.
                        </p>
                      </div>
                      <ArrowRight size={64} />
                    </div>
                  </div>
                )}

              {dataToBuy.days > 0 && dataToBuy.price > 0 && (
                <div className={styles.continue_to_buy}>
                  <div className={styles.question}>
                    <span>Действительно купить на {dataToBuy.days} дней</span>
                    <p className={styles.price_holder}>
                      за {dataToBuy.price}{" "}
                      <Image
                        width={36}
                        height={36}
                        alt="rubby"
                        className={styles.rubby}
                        src={"/rubby.png"}
                      />
                      ?
                    </p>
                  </div>
                  <div className={styles.buttons}>
                    <button
                      className={styles.decline}
                      onClick={() => {
                        setDataToBuy({ days: 0, price: 0 });
                      }}
                    >
                      Отмена
                    </button>
                    <button className={styles.apply} onClick={handleOnClick}>
                      Применить
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {result == "success" && (
            <div className={styles.holder}>
              <div className={styles.success_div}>
                <div className={styles.check}>
                  <Check size={42} />
                </div>
                <div className={styles.text}>
                  Оплата прошла успешно. Статус установлен на {dataToBuy.days}{" "}
                  дней.
                </div>
              </div>
            </div>
          )}
          {result == "failure" && (
            <div className={styles.holder}>
              <div className={styles.failure_div}>
                <div className={styles.xmark}>
                  <XIcon size={42} />
                </div>
                <div className={styles.text}>
                  Ошибка при оплате.
                  <h3>{errorMessage}.</h3>
                </div>
              </div>
            </div>
          )}
          {result == "warning" && (
            <div className={styles.holder}>
              <div className={styles.warning_div}>
                <div className={styles.exclamation}>
                  <FaExclamation size={42} />
                </div>
                <div className={styles.text}>
                  Кажется вы ошиблись.
                  <h3>{errorMessage}.</h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
