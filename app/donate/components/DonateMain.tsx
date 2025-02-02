"use client";

import styles from "./DonateMain.module.css";
import CheapStatus from "./CheapStatus";
import ExpensiveStatus from "./ExpensiveStatus";

import { TableTitle } from "./TableTitle";
import { cheapData, expensiveData } from "./constants";
import { Status } from "./Status";
import { Buy } from "./Buy";
import { useState } from "react";

export const DonateMain = () => {
  const [showBuy, setShowBuy] = useState(false);

  const closeBuy = () => {
    setShowBuy(false);
  };

  const [selectedStatus, setSelectedStatus] = useState({
    name: "",
    price: "",
    imageURL: "",
    bg_color: "",
  });

  const handleStatusSelect = (
    name: string,
    price: string,
    imageURL: string,
    bg_color: string
  ) => {
    setSelectedStatus({ name, price, imageURL, bg_color });
    setShowBuy(true);
  };

  return (
    <div className={styles.DonateMain}>
      <div className={styles.status_content}>
        <div className={`${styles.top}`}>
          <div className={styles.title}>
            <h4 className={`text-white`}>Магазин привилегий</h4>
          </div>

          <div className={styles.status_container}>
            <div className={styles.statuses}>
              <div className={styles.stat}>
                {cheapData.map(
                  ({
                    src,
                    statusClass,
                    statusName,
                    price,
                    buttonColor,
                    bg_color,
                  }) => (
                    <CheapStatus
                      key={statusClass}
                      src={src}
                      statusClass={statusClass}
                      statusName={statusName}
                      price={price}
                      buttonColor={buttonColor}
                      onClick={() =>
                        handleStatusSelect(statusName, price, src, bg_color)
                      }
                    />
                  )
                )}
                {expensiveData.map(
                  ({
                    src,
                    statusClass,
                    statusName,
                    price,
                    buttonColor,
                    bg_color,
                  }) => (
                    <ExpensiveStatus
                      key={statusClass}
                      src={src}
                      statusClass={statusClass}
                      statusName={statusName}
                      price={price}
                      buttonColor={buttonColor}
                      onClick={() =>
                        handleStatusSelect(statusName, price, src, bg_color)
                      }
                    />
                  )
                )}
              </div>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.radial}></div>
          <div className={styles.light}></div>
        </div>
        <div className={`${styles.donate_container}`}>
          <div className={styles.title_holder}>
            <h4 id="improve">
              Стань лучше других.
              <br />
              Подробнее в деталях.
            </h4>
          </div>
          <div className={styles.donate_table}>
            <div className={styles.donate_table_header}>
              <div className={styles.heading} />
              <div className={styles.donate_table_statuses}>
                <TableTitle
                  src="/vip_picture.png"
                  text="Vip"
                  background="bg_0"
                  border=""
                  price="99₽"
                />
                <TableTitle
                  src="/premium_picture.png"
                  text="Premium"
                  background="bg_1"
                  border=""
                  price="299₽"
                />
                <TableTitle
                  src="/deluxe_picture.png"
                  text="Deluxe"
                  background="bg_2"
                  border=""
                  price="499₽"
                />
                <TableTitle
                  src="/ultra_picture.png"
                  text="ULTRA"
                  background="bg_3"
                  border="border_ultra"
                  price="999₽"
                />
                <TableTitle
                  src="/legend_picture.png"
                  text="LEGEND"
                  background="bg_4"
                  border="border_legend"
                  price="1499₽"
                />
              </div>
            </div>
            <div className={styles.top_skills}>
              <Status
                text="Кит набор Vip"
                icons={["check", "check", "check", "check", "check"]}
                kit={true}
                src="/image.png"
              />
              <Status
                text="Кит набор Premium"
                icons={["xmark", "check", "check", "check", "check"]}
                kit={true}
                src="/image.png"
              />
              <Status
                text="Кит набор Deluxe"
                icons={["xmark", "xmark", "check", "check", "check"]}
                kit={true}
                src="/image.png"
              />
              <Status
                text="Кит набор ULTRA"
                icons={["xmark", "xmark", "xmark", "check", "check"]}
                kit={true}
                src="/image.png"
              />
              <Status
                text="Кит набор LEGEND"
                icons={["xmark", "xmark", "xmark", "xmark", "check"]}
                kit={true}
                src="/image.png"
              />
              <Status
                text=""
                icons={["none", "none", "none", "none", "none"]}
              />
              <Status
                text="Сохранение инвентаря"
                icons={["check", "check", "check", "check", "check"]}
              />
              <Status
                text="Сохранение брони "
                icons={["check", "check", "check", "check", "check"]}
              />
              <Status
                text="Сохранение опыта"
                icons={["check", "check", "check", "check", "check"]}
              />
              <Status
                text="Писать цветным в чате"
                icons={["xmark", "xmark", "xmark", "xmark", "check"]}
              />
              <Status
                text=""
                icons={["none", "none", "none", "none", "none"]}
              />
              <Status
                text="Команда /feed"
                icons={["check", "check", "check", "check", "check"]}
              />
              <Status
                text="Команда /near"
                icons={["check", "check", "check", "check", "check"]}
              />
              <Status
                text="Команда /repair"
                icons={["check", "check", "check", "check", "check"]}
              />
              <Status
                text="Команда /enderchest"
                icons={["check", "check", "check", "check", "check"]}
              />
              <Status
                text="Команда /fly"
                icons={["xmark", "check", "check", "check", "check"]}
              />
              <Status
                text="Команда /back"
                icons={["xmark", "check", "check", "check", "check"]}
              />
              <Status
                text="Команда /tppos"
                icons={["xmark", "xmark", "check", "check", "check"]}
              />
              <Status
                text="Команда /exp"
                icons={["xmark", "xmark", "check", "check", "check"]}
              />
              <Status
                text="Команда /firework"
                icons={["xmark", "xmark", "check", "check", "check"]}
              />
              <Status
                text="Команда /jump"
                icons={["xmark", "xmark", "xmark", "check", "check"]}
              />
              <Status
                text="Команда /heal"
                icons={["xmark", "xmark", "xmark", "check", "check"]}
              />
              <Status
                text="Команда /god"
                icons={["xmark", "xmark", "xmark", "check", "check"]}
              />
              <Status
                text="Команда /speed"
                icons={["xmark", "xmark", "xmark", "xmark", "check"]}
              />
              <Status
                text="Команда /vanish"
                icons={["xmark", "xmark", "xmark", "xmark", "check"]}
              />
              <Status
                text="Команда /top"
                icons={["xmark", "xmark", "xmark", "xmark", "check"]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.radial}></div>
      <div className={styles.line}></div>
      {showBuy && (
        <Buy
          onClose={closeBuy}
          nameStatus={selectedStatus.name}
          priceStatus={selectedStatus.price}
          imageURL={selectedStatus.imageURL}
          bg_color={selectedStatus.bg_color}
        />
      )}
    </div>
  );
};
