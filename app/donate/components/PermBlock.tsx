import Image from "next/image";
import styles from "./Main.module.css";
import { Currency } from "@/app/ui/currency";

interface PermBlockProps {
  src: string;
  statusClass: string;
  statusName: string;
  price: string;
  buttonColor: string;
  onClick: () => void;
}

const PermBlock: React.FC<PermBlockProps> = ({
  src,
  statusClass,
  statusName,
  price,
  buttonColor,
  onClick,
}) => {
  return (
    <div className={`${styles.cheap_status}`}>
      <div className={styles.donate_status_container}>
        <Image
          src={src}
          alt="Minecraft Title"
          width={150}
          quality={100}
          height={150}
          className={styles.image}
        />
        <div className={styles.donate_status_title}>ПРИВИЛЕГИЯ</div>
        <div
          className={`${styles.donate_status_naming} ${styles[buttonColor]}`}
        >
          {statusName}
        </div>
        <div className={styles.price}>
          <h3>{price}</h3>
          <Currency />
          <span> / мес.</span>
        </div>
      </div>
      <div className={styles.button_get} onClick={onClick}>
        Купить статус
      </div>
    </div>
  );
};

export default PermBlock;
