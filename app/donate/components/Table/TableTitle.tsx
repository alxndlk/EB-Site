import Image from "next/image";
import styles from "../Main.module.css";

interface ITableProps {
  src: string;
  text: string;
  border: string;
  background: string;
  price: string;
}

export const TableTitle: React.FC<ITableProps> = ({
  src,
  text,
  border,
  background,
  price,
}) => {
  return (
    <div
      className={`${styles.donate_status} ${styles[background]} ${styles[border]}`}
    >
      <Image
        src={src}
        alt="Minecraft Block"
        width={32}
        quality={100}
        height={32}
      />
      <span>{text}</span>
      <p className={styles.title_price}>{price}</p>
    </div>
  );
};
