import styles from './ui.module.css';
import { CheckIcon } from "lucide-react";

interface I_InputActive {
    width?: keyof typeof Width;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    length?: number;
    autoComplete?: string;
    name?: string;
    icon?: boolean,
}

const Width = {
    small: '100px',
    medium: '200px',
    big: '300px',
    large: '400px',
    full: '100%'
};

export const InputActive = ({
    width = 'big',
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
                style={{ width: `${Width[width]}` }}
                placeholder={placeholder}
                onChange={onChange}
                type={type}
                minLength={length}
                autoComplete={autoComplete}
                name={name || 'dummy'}
            />
            {icon && (
                <div className={styles.CheckIcon}>
                    <CheckIcon size={16} color='#449d5d' absoluteStrokeWidth/>
                </div>
            )}
        </div>


    );
};
