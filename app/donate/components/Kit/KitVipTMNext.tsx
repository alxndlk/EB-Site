import React, { useState } from "react";
import styles from "./Kit.module.css";
import Image from "next/image";

const items = [
  { id: 1, name: "Пузырёк опыта", img: "/vip/exp.png", count: 64 },
  { id: 2, name: "Пузырёк опыта", img: "/vip/exp.png", count: 64 },
  { id: 3, name: "Пузырёк опыта", img: "/vip/exp.png", count: 64 },
  { id: 4, name: "Пузырёк опыта", img: "/vip/exp.png", count: 64 },
  { id: 5, name: "Губка", img: "/vip/sponge.png", count: 16 },
  { id: 6, name: "Блок слизи", img: "/vip/slime.png", count: 16 },
  { id: 7, name: "Тотем бессмертия", img: "/vip/totem.png", count: 3 },
  { id: 8, name: "Компас восстановления", img: "/vip/compass.gif", count: 1 },
  { id: 9, name: "Добыча III", img: "/vip/book.gif", count: 1 },
  { id: 10, name: "Сила V", img: "/vip/book.gif", count: 1 },
  { id: 11, name: "Бесконечность", img: "/vip/book.gif", count: 1 },
  { id: 12, name: "Острота V", img: "/vip/book.gif", count: 1 },
  { id: 13, name: "Незеритовый шлем", img: "/vip/helmet.png", count: 1 },
  {
    id: 14,
    name: "Незеритовый нагрудник",
    img: "/vip/chestplate.png",
    count: 1,
  },
  {
    id: 15,
    name: "Незеритовые поножи",
    img: "/vip/leggins.png",
    count: 1,
  },
  {
    id: 16,
    name: "Незеритовые ботинки",
    img: "/vip/boots.png",
    count: 1,
  },
  {
    id: 17,
    name: "Незеритовый меч",
    img: "/vip/sword.png",
    count: 1,
  },
  {
    id: 18,
    name: "Незеритовый топор",
    img: "/vip/axe.png",
    count: 1,
  },
  {
    id: 19,
    name: "Незеритовая Кирка",
    img: "/vip/pickaxe.png",
    count: 1,
  },
  {
    id: 20,
    name: "Незеритовая лопата",
    img: "/vip/shovel.png",
    count: 1,
  },
  {
    id: 21,
    name: "Незеритовая мотыга",
    img: "/vip/hoe.png",
    count: 1,
  },
  {
    id: 22,
    name: "Лук",
    img: "/vip/bow.png",
    count: 1,
  },
  {
    id: 23,
    name: "Стрела",
    img: "/vip/arrow.png",
    count: 1,
  },
  {
    id: 24,
    name: "Адская звезда",
    img: "/vip/star.png",
    count: 4,
  },
  {
    id: 25,
    name: "Золотое яблоко",
    img: "/vip/apple.png",
    count: 32,
  },
  {
    id: 26,
    name: "Феерверк",
    img: "/vip/firework.png",
    count: 32,
  },
  {
    id: 27,
    name: "Элитры",
    img: "/vip/elytras.png",
    count: 1,
  },
  {
    id: 28,
    name: "Зачарованное золотое яблоко",
    img: "/vip/apple.png",
    count: 16,
  },
  {
    id: 29,
    name: "Железный блок",
    img: "/vip/iron_block.png",
    count: 32,
  },
  {
    id: 30,
    name: "Золотой блок",
    img: "/vip/golden_block.png",
    count: 16,
  },
  {
    id: 31,
    name: "Алмазный блок",
    img: "/vip/diamond_block.png",
    count: 16,
  },
  {
    id: 33,
    name: "Изумрудный блок",
    img: "/vip/emerald_block.png",
    count: 16,
  },
  {
    id: 34,
    name: "Незеритовый блок",
    img: "/vip/netherite_block.png",
    count: 2,
  },
  { id: 35, name: null, img: null, count: 1 },
  { id: 36, name: null, img: null, count: 1 },
  { id: 37, name: null, img: null, count: 1 },
];

const KitVipTMNext = () => {
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

export default KitVipTMNext;
