import React from "react";
import { RiCopperCoinFill } from "react-icons/ri";
import styles from "./ui.module.css";

export const Currency = () => {
  return (
    <div className={styles.user_balance_value}>
      <RiCopperCoinFill />
    </div>
  );
};
