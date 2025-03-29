import styles from "./ui.module.css";
import { CheckIcon } from "lucide-react";
import * as Icons from "lucide-react";

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
  iconName?: keyof typeof Icons;
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
  iconName,
}: I_InputActive) => {
  const LucideIcon = iconName ? Icons[iconName] : null;

  return (
    <div className={styles.inputContainer} style={{ margin }}>
      {LucideIcon && <LucideIcon size={16} color="gray" absoluteStrokeWidth />}
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
