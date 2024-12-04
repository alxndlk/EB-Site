import styles from './ui.module.css';
import { CheckIcon } from "lucide-react";

interface I_InputActive {
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    length?: number;
    autoComplete?: string;
    name?: string;
    icon?: boolean,
}

export const InputActive = ({
    placeholder,
    onChange,
    type = 'text',
    length,
    autoComplete = 'off',
    name,
    icon
}: I_InputActive) => {
    return (
        <div className={styles.inputContainer}>
            <input
                className={`${styles.InputActive}`}
                placeholder={placeholder}
                onChange={onChange}
                type={type}
                minLength={length}
                autoComplete={autoComplete}
                name={name || 'dummy'}
            />
            {icon && (
                <div className={styles.CheckIcon}>
                    <CheckIcon size={16} color='lime' absoluteStrokeWidth/>
                </div>
            )}
        </div>


    );
};
