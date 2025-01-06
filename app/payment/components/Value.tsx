import React from "react";
import styles from "./Main.module.css";

interface IValue {
  value?: number;
  setValue?: (newValue: number) => void;
}

export const Value = ({ value, setValue }: IValue) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setValue) {
      setValue(Number(e.target.value));
    }
  };

  return (
    <div className={styles.container_value}>
      {setValue && (
        <div className={styles.input_holder}>
          <input type="number" onChange={handleInputChange} />
        </div>
      )}
      <div className={styles.value}>{value}</div>
    </div>
  );
};
