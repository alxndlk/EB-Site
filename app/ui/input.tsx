/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./ui.module.css";
import { CheckIcon } from "lucide-react";

interface I_InputActive {
  placeholder?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  length?: number;
  autoComplete?: string;
  name?: string;
  icon?: boolean;
  margin?: string;
  disabled?: boolean;
}

export const InputActive = ({
  placeholder,
  onChange,
  type = "text",
  length,
  autoComplete = "off",
  name,
  icon,
  margin,
  disabled = false,
}: I_InputActive) => {
  return (
    <div className={styles.inputContainer} style={{ margin }}>
      <input
        className={`${styles.InputActive}`}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        minLength={length}
        autoComplete={autoComplete}
        name={name || "dummy"}
        disabled={disabled}
      />
      {icon && (
        <div className={styles.CheckIcon}>
          <CheckIcon size={16} color="lime" absoluteStrokeWidth />
        </div>
      )}
    </div>
  );
};
