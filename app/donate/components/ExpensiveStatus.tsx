import { ChevronRightIcon } from 'lucide-react'
import Image from 'next/image';
import styles from './DonateMain.module.css'

interface ExpensiveStatusProps {
    src: string;
    statusClass: string; 
    statusName: string;
    price: string;
    buttonColor: string;
}


const ExpensiveStatus: React.FC<ExpensiveStatusProps> = ({ src, statusClass, statusName, price, buttonColor}) => {
    return (
        <div className={`${styles.Exprensive_status} ${styles[statusClass]}`}>
            <div className={styles.donate_status_container}>
                <Image
                    src={src}
                    alt="Minecraft Title"
                    width={300}
                    quality={100}
                    height={300}
                    className={styles.image}
                />

                <div className={styles.donate_status_title}>Привилегия</div>
                <div className={`${styles.donate_status_naming} ${styles[buttonColor]}`}>
                    {statusName}
                </div>
                <div className={styles.price}>
                    {price}
                    <h3>/</h3>
                    <span> мес.</span>
                </div>
            </div>
            <div className={styles.button_get}>
                Купить статус
                <ChevronRightIcon className={styles.chevron_right} />
            </div>
        </div>
    );
};

export default ExpensiveStatus;