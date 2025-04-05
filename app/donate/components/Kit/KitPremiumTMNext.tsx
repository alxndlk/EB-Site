import React, { useState } from "react";
import styles from "./Kit.module.css";
import Image from "next/image";

const items = [
  { id: 1, name: "Яйцо дракона", img: "/premium/egg.png", count: 16 },
  { id: 2, name: "Тотем бессмертия", img: "/premium/totem.png", count: 1 },
  { id: 3, name: "Звезда незера", img: "/premium/star.png", count: 16 },
  { id: 4, name: "МЭ регулятор", img: "/premium/me.png", count: 12 },
  { id: 5, name: "Эхо Кладбища Короблей", img: "/premium/echo.png", count: 16 },
  {
    id: 6,
    name: "Незеритовый бекпак",
    img: "/premium/backpack.png",
    count: 1,
  },
  { id: 7, name: "Карминит", img: "/premium/carminite.png", count: 32 },
  {
    id: 8,
    name: "Солнечная панель VII",
    img: "/premium/solar_7.png",
    count: 2,
  },
  { id: 9, name: "Адский шлем", img: "/premium/helmet.png", count: 1 },
  {
    id: 10,
    name: "Адский нагрудник",
    img: "/premium/d_chestplate.png",
    count: 1,
  },
  { id: 11, name: "Адские поножи", img: "/premium/d_leggins.png", count: 1 },
  { id: 12, name: "Адские ботинки", img: "/premium/d_boots.png", count: 1 },
  {
    id: 13,
    name: "Медальон исцеления",
    img: "/premium/medallion.png",
    count: 1,
  },
  { id: 14, name: "Звёздный крушитель", img: "/premium/smesher.png", count: 1 },
  {
    id: 15,
    name: "Нечестивый слиток",
    img: "/premium/enigmatic_s.png",
    count: 8,
  },
  {
    id: 16,
    name: "Бесконечный стейк",
    img: "/premium/eternal_steak.png",
    count: 1,
  },
  {
    id: 17,
    name: "Кристальное сердце",
    img: "/premium/crystal_heart.png",
    count: 1,
  },
  {
    id: 18,
    name: "Нейтрониевый слиток",
    img: "/premium/neitronium_ignot.png",
    count: 4,
  },
  {
    id: 19,
    name: "Беспроводной терминал изготовления",
    img: "/premium/wct.png",
    count: 1,
  },
  {
    id: 20,
    name: "64К ячейка хранения",
    img: "/premium/64k_sell.png",
    count: 1,
  },
  {
    id: 21,
    name: "64К ячейка хранения",
    img: "/premium/64k_sell.png",
    count: 1,
  },
  {
    id: 22,
    name: "Дисковод",
    img: "/premium/drive.png",
    count: 4,
  },
  {
    id: 23,
    name: "МЭ интерфейс",
    img: "/premium/interface.png",
    count: 16,
  },
  {
    id: 24,
    name: "Хранилище для изготовления на 16К",
    img: "/premium/16k_block.png",
    count: 4,
  },
  {
    id: 25,
    name: "Хранилище для изготовления на 64K",
    img: "/premium/64k_block.png",
    count: 2,
  },
  {
    id: 26,
    name: "Молекулярный сборщик",
    img: "/premium/ma.png",
    count: 8,
  },
  {
    id: 27,
    name: "МЭ умный кабель",
    img: "/premium/smart_cable.png",
    count: 64,
  },
  {
    id: 28,
    name: "Fishbig",
    img: "/premium/doll.png",
    count: 1,
  },
  {
    id: 29,
    name: "Небесный стально блок",
    img: "/premium/black.png",
    count: 64,
  },
  {
    id: 30,
    name: "Слиток кристаллической матрицы",
    img: "/premium/martix.png",
    count: 16,
  },
  {
    id: 31,
    name: "Тронутая душой скалк-книжная полка",
    img: "/premium/bookshelf.png",
    count: 16,
  },
  {
    id: 32,
    name: "Изумрудная печь",
    img: "/premium/emerald_furnace.png",
    count: 1,
  },
  {
    id: 33,
    name: "Слиток альфстали",
    img: "/premium/alfsteel_ingot.png",
    count: 16,
  },
  {
    id: 34,
    name: "Сигналовый слиток",
    img: "/premium/signalum.png",
    count: 32,
  },
  {
    id: 35,
    name: "Люмиевый слиток",
    img: "/premium/lumium.png",
    count: 32,
  },
  {
    id: 36,
    name: "Эндериевый слиток",
    img: "/premium/enderium.png",
    count: 32,
  },
];

const KitPremiumTMNext = () => {
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);

  return (
    <div className={styles.outline}>
      <div className={styles.container}>
        <div className={styles.content}>
          {items.map((item) => (
            <div
              key={item.id}
              className={styles.item}
              title={item.name}
              onMouseEnter={() => setHoveredItemId(item.id)}
              onMouseLeave={() => setHoveredItemId(null)}
            >
              {item.img !== null && (
                <Image
                  width={48}
                  height={48}
                  src={item.img}
                  alt={item.name}
                  className={styles.itemImage}
                />
              )}

              {hoveredItemId === item.id && item.name !== null && (
                <div className={styles.tooltip}>{item.name}</div>
              )}
              {item.count > 1 && (
                <span className={styles.stack}>{item.count}</span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.line} />
    </div>
  );
};

export default KitPremiumTMNext;
