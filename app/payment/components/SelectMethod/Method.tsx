import { useEffect, useRef } from "react";
import styles from "./Method.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Method = ({
  onClose,
  onSelect,
}: {
  onClose: () => void;
  onSelect: (
    type: "Гривны" | "Доллары" | "Евро" | "Рубли" | "Инностранные карты" | null
  ) => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleSelect = (
    type: "Гривны" | "Доллары" | "Евро" | "Рубли" | "Инностранные карты"
  ) => {
    onSelect(type);
    onClose();
  };

  const router = useRouter();

  return (
    <div className={styles.payment_holder}>
      <div className={styles.payment} ref={containerRef}>
        <div className={styles.title}>Выберите способ оплаты</div>
        <div className={styles.payments}>
          <div className={styles.holder} onClick={() => handleSelect("Рубли")}>
            <Image
              alt="ru"
              height={24}
              width={32}
              quality={100}
              src="/ru.png"
            />
            КАРТЫ БАНКОВ РОССИИ
          </div>
          <div className={styles.holder} onClick={() => handleSelect("Гривны")}>
            <Image
              alt="ua"
              height={24}
              width={32}
              quality={100}
              src="/ua.png"
            />
            КАРТЫ БАНКОВ УКРАИНЫ
          </div>
          <div
            className={styles.holder}
            onClick={() => handleSelect("Доллары")}
          >
            <div className={styles.currency}>$</div>
            ДОЛЛАРОВЫЕ КАРТЫ
          </div>
          <div className={styles.holder} onClick={() => handleSelect("Евро")}>
            <div className={styles.currency}>€</div>КАРТЫ ДЛЯ ОПЛАТЫ В EВРО
          </div>
          <div
            className={styles.holder}
            onClick={() => handleSelect("Инностранные карты")}
          >
            <Image
              alt="mastercard"
              height={24}
              width={32}
              quality={100}
              src="/mastercard.png"
            />
            ИННОСТРАННЫЕ КАРТЫ #1
          </div>
          <div
            className={styles.holder}
            onClick={() => handleSelect("Инностранные карты")}
          >
            <Image
              alt="visa"
              height={24}
              width={32}
              quality={100}
              src="/visa.png"
              className={styles.visa}
            />
            ИННОСТРАННЫЕ КАРТЫ #2
          </div>
        </div>
        <div className={styles.title}>ДРУГИЕ СПОСОБЫ ОПЛАТЫ</div>
        <div className={styles.payments}>
          <div
            className={styles.holder}
            onClick={() => router.push("https://t.me/alxndlk")}
          >
            <Image
              alt="telegram"
              height={32}
              width={32}
              quality={100}
              src="/telegram.png"
              className={styles.round}
            />
            ОПЛАТА ЧЕРЕЗ АДМИНИСТРАЦИЮ
          </div>
          <div
            className={styles.holder}
            onClick={() => router.push("https://t.me/alxndlk")}
          >
            <Image
              alt="wallet"
              height={32}
              width={32}
              quality={100}
              src="/wallet.png"
              className={styles.round}
            />
            ОПЛАТА ЧЕРЕЗ WALLET
          </div>
        </div>
      </div>
    </div>
  );
};
