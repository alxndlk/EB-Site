import Image from "next/image";
import styles from "./DonateMain.module.css";

interface CheapStatusProps {
  src: string;
  statusClass: string;
  statusName: string;
  price: string;
  buttonColor: string;
  onClick: () => void;
}

const CheapStatus: React.FC<CheapStatusProps> = ({
  src,
  statusClass,
  statusName,
  price,
  buttonColor,
  onClick,
}) => {
  return (
    <div className={`${styles.cheap_status} ${styles[statusClass]}`}>
      <div className={styles.donate_status_container}>
        <Image
          src={src}
          alt="Minecraft Title"
          width={150}
          quality={100}
          height={150}
          className={styles.image}
        />
        <div className={styles.donate_status_title}>Привилегия</div>
        <div
          className={`${styles.donate_status_naming} ${styles[buttonColor]}`}
        >
          {statusName}
        </div>
        <div className={styles.price}>
          {price}
          <h3>/</h3>
          <span> мес.</span>
        </div>
      </div>
      <div className={styles.button_get} onClick={onClick}>
        Купить статус
      </div>
    </div>
  );
};

export default CheapStatus;
