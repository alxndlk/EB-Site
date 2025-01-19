import React from "react";
import styles from "./Main.module.css";

interface TableRowProps {
  modName?: string;
  description?: string;
}

export const TableRow = ({ modName, description }: TableRowProps) => {
  return (
    <div className={styles.modNameRow}>
      <div className={styles.modNameHolder}>{modName}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
