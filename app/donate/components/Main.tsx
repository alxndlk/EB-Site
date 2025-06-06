"use client";

import styles from "./Main.module.css";
import PermBlock from "./PermBlock";

import { TableTitle } from "./Table/TableTitle";
import { Data } from "./constants";
import { Status } from "./Table/TableStatus";
import { Buy } from "./Buy/Buy";
import { useState } from "react";
import KitVipTMNext from "./Kit/KitVipTMNext";
import KitEmpty from "./Kit/KitEmpty";
import KitPremiumTMNext from "./Kit/KitPremiumTMNext";
import KitDeluxeTMNext from "./Kit/KitDeluxeTMNext";
import KitUltraTMNext from "./Kit/KitUltraTMNext";
import KitLegendTMNext from "./Kit/KitLegendTMNext";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { KITS_LIST } from "./kits";
import KitMap from "./Kit/KitMap";

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
        <div className={styles.top_holder}>
          <div className={styles.image_top} />
          <div className={styles.shadow} />
          <div className={`${styles.top}`}>
            <div className={styles.title}>
              <h4 className={`text-white`}>ПОКУПКА ПРИВИЛЕГИЙ</h4>
              <p>
                Покупка привилегий даст доступ к уникальным возможностям,
                дополнительным правам и бонусам, сделав игру комфортнее и
                интереснее.
              </p>
            </div>

            <div className={styles.status_container}>
              <div className={styles.statuses}>
                <div className={styles.stat}>
                  {Data.map(
                    ({
                      src,
                      statusClass,
                      statusName,
                      price,
                      buttonColor,
                      bg_color,
                    }) => (
                      <PermBlock
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
          </div>
          <div className={styles.line}></div>
          <div className={styles.radial}></div>
        </div>
        <KitMap />
        <div className={`${styles.donate_container}`}>
          <div className={styles.title_holder}>
            <h4 id="improve">ПОПРОБУЙ УЖЕ СЕЙЧАС.</h4>
            <p>
              Покупка привилегий даст доступ к уникальным возможностям,
              дополнительным правам и бонусам, сделав игру комфортнее и
              интереснее.
            </p>
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
                  price="99"
                />
                <TableTitle
                  src="/premium_picture.png"
                  text="Premium"
                  background="bg_1"
                  border=""
                  price="299"
                />
                <TableTitle
                  src="/deluxe_picture.png"
                  text="Deluxe"
                  background="bg_2"
                  border=""
                  price="499"
                />
                <TableTitle
                  src="/ultra_picture.png"
                  text="ULTRA"
                  background="bg_3"
                  border="border_ultra"
                  price="999"
                />
                <TableTitle
                  src="/legend_picture.png"
                  text="LEGEND"
                  background="bg_4"
                  border="border_legend"
                  price="1499"
                />
              </div>
            </div>
            <div className={styles.top_skills}>
              <Status
                text="Кит набор Vip"
                icons={["check", "check", "check", "check", "check"]}
                kit={true}
                src="/vip_kit.png"
              />
              <Status
                text="Кит набор Premium"
                icons={["xmark", "check", "check", "check", "check"]}
                kit={true}
                src="/premium_kit.png"
              />
              <Status
                text="Кит набор Deluxe"
                icons={["xmark", "xmark", "check", "check", "check"]}
                kit={true}
                src="/deluxe_kit.png"
              />
              <Status
                text="Кит набор ULTRA"
                icons={["xmark", "xmark", "xmark", "check", "check"]}
                kit={true}
                src="/ultra_kit.png"
              />
              <Status
                text="Кит набор LEGEND"
                icons={["xmark", "xmark", "xmark", "xmark", "check"]}
                kit={true}
                src="/legend_kit.png"
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
          <div className={styles.line}></div>
          <div className={styles.radial}></div>
        </div>
      </div>
      {showBuy && (
        <Buy
          onClose={closeBuy}
          PERMISSION_NAME={selectedStatus.name}
          priceStatus={selectedStatus.price}
          imageURL={selectedStatus.imageURL}
          bg_color={selectedStatus.bg_color}
        />
      )}
    </div>
  );
};
