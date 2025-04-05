import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import styles from "../Main.module.css";
import KitVipTMNext from "./KitVipTMNext";
import KitEmpty from "./KitEmpty";
import { KITS_LIST } from "../kits";
import KitDeluxeTMNext from "./KitDeluxeTMNext";
import KitLegendTMNext from "./KitLegendTMNext";
import KitPremiumTMNext from "./KitPremiumTMNext";
import KitUltraTMNext from "./KitUltraTMNext";

const kitComponents: Record<string, React.ReactNode> = {
  KitVipTMNext: <KitVipTMNext />,
  KitEmpty: <KitEmpty />,
  KitDeluxeTMNext: <KitDeluxeTMNext />,
  KitLegendTMNext: <KitLegendTMNext />,
  KitPremiumTMNext: <KitPremiumTMNext />,
  KitUltraTMNext: <KitUltraTMNext />,
};

const KitMap = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentKit = KITS_LIST[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + KITS_LIST.length) % KITS_LIST.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % KITS_LIST.length);
  };

  return (
    <div className={styles.kit_content}>
      <div
        className={styles.kits}
        style={{ backgroundImage: currentKit.background }}
      >
        <div className={styles.kits_shadow} />
        <div className={styles.container_kits}>
          <div className={styles.title_kits}>
            <div>
              <h4>НАБОР {currentKit.name}</h4>
              <p>{currentKit.description}</p>
            </div>
            <div className={styles.arrows}>
              <div className={styles.arrow} onClick={handlePrev}>
                <ArrowLeft />
              </div>
              <div className={styles.arrow} onClick={handleNext}>
                <ArrowRight />
              </div>
            </div>
          </div>
          <div className={styles.grid_container}>
            {currentKit.kits.map((kitName, index) => (
              <div className={styles.grid} key={index}>
                <h4>{currentKit.kitsId?.[index] || "Без названия"}</h4>
                {kitComponents[kitName] || <KitEmpty />}
              </div>
            ))}
            <div className={styles.line}></div>
            <div className={styles.radial}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitMap;
