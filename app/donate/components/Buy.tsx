"use client";

import React, { useEffect, useState } from "react";
import styles from "./Buy.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight, Check, XIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { FaExclamation } from "react-icons/fa";
import { useUserData } from "@/hooks/useUserData";

interface BuyProps {
  onClose: () => void;
  imageURL: string;
  priceStatus: string;
  nameStatus: string;
  bg_color: string;
}

export const Buy: React.FC<BuyProps> = ({
  onClose,
  imageURL,
  nameStatus,
  priceStatus,
  bg_color,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const { data: session } = useSession();
  const { userData } = useUserData();
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const router = useRouter();
  const [dataToBuy, setDataToBuy] = useState({
    days: 0,
    price: 0,
  });

  const [expireDateResult, setExpireDateResult] = useState(null);

  const [errorMessage, setErrorMessage] = useState("");
  const [result, setResult] = useState<
    "success" | "failure" | "warning" | "none"
  >("none");

  const handleOnClick = async () => {
    try {
      const response = await fetch("/api/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: dataToBuy.price,
          status: nameStatus,
          userName: session?.user?.name,
          daysToBuy: dataToBuy.days,
          RCON_HOST: process.env.RCON_HOST,
          RCON_PORT: process.env.RCON_PORT,
          RCON_PASSWORD: process.env.RCON_PASWWORD,
        }),
      });
      const resultData = await response.json();

      if (response.ok) {
        setResult("success");
        setErrorMessage("");
        setExpireDateResult(resultData.code);
      } else {
        setResult("failure");
        setErrorMessage(resultData.error || "Произошла неизвестная ошибка");
      }

      if (resultData.code === "ROLE_DOWNGRADE_NOT_ALLOWED") {
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

  useEffect(() => {
    console.log("Expire date result:", expireDateResult);
  }, [expireDateResult]);

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
                  <p>{nameStatus}</p>
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

              {dataToBuy.days == 0 && dataToBuy.price == 0 && (
                <div className={styles.bottom}>
                  <div
                    className={styles.buy_holder}
                    onClick={() => {
                      setDataToBuy({
                        days: 30,
                        price: Number(
                          Number(priceStatus.replace(/[^\d.]/g, "")).toFixed(0)
                        ),
                      });
                    }}
                  >
                    <div className={styles.text_info}>
                      <span>Купить на 30 дней.</span>
                      <p id="price30">
                        за{" "}
                        {Number(priceStatus.replace(/[^\d.]/g, "")).toFixed(0)}{" "}
                        $ / мес.
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
                          ).toFixed(0)
                        ),
                      });
                    }}
                  >
                    <div className={styles.text_info}>
                      <span>Купить на 3 месяца.</span>
                      <p>
                        за{" "}
                        {(
                          Number(priceStatus.replace(/[^\d.]/g, "")) * 2.4
                        ).toFixed(0)}{" "}
                        $ / 3 мес.
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
                    <p>за {dataToBuy.price} $ / мес?</p>
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
                  Оплата прошла успешно. Статус установлен до{" "}
                  {isNaN(new Date(expireDateResult).getTime())
                    ? "Неизвестная дата"
                    : new Date(expireDateResult).toLocaleDateString()}
                  .
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
