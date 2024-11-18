import styles from './ui.module.css'

interface I_ButtonRed {
    text?: string;
    onClick?: () => void;
}

export const ButtonRed = ({ text, onClick  }: I_ButtonRed) => {


    return (
        <button className={`${styles.log_out}`} onClick={onClick}>{text}</button>
    )
}