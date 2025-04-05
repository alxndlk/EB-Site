import React, { useState } from "react";
import styles from "./Kit.module.css";
import Image from "next/image";

const items = [
  { id: 1, name: null, img: null, count: 1 },
  { id: 2, name: null, img: null, count: 1 },
  { id: 3, name: null, img: null, count: 1 },
  { id: 4, name: null, img: null, count: 1 },
  { id: 5, name: null, img: null, count: 1 },
  { id: 6, name: null, img: null, count: 1 },
  { id: 7, name: null, img: null, count: 1 },
  { id: 8, name: null, img: null, count: 1 },
  { id: 9, name: null, img: null, count: 1 },
  { id: 10, name: null, img: null, count: 1 },
  { id: 11, name: null, img: null, count: 1 },
  { id: 12, name: null, img: null, count: 1 },
  { id: 13, name: null, img: null, count: 1 },
  { id: 14, name: null, img: null, count: 1 },
  { id: 15, name: null, img: null, count: 1 },
  { id: 16, name: null, img: null, count: 1 },
  { id: 17, name: null, img: null, count: 1 },
  { id: 18, name: null, img: null, count: 1 },
  { id: 19, name: null, img: null, count: 1 },
  { id: 20, name: null, img: null, count: 1 },
  { id: 21, name: null, img: null, count: 1 },
  { id: 22, name: null, img: null, count: 1 },
  { id: 23, name: null, img: null, count: 1 },
  { id: 24, name: null, img: null, count: 1 },
  { id: 25, name: null, img: null, count: 1 },
  { id: 26, name: null, img: null, count: 1 },
  { id: 27, name: null, img: null, count: 1 },
  { id: 28, name: null, img: null, count: 1 },
  { id: 29, name: null, img: null, count: 1 },
  { id: 30, name: null, img: null, count: 1 },
  { id: 31, name: null, img: null, count: 1 },
  { id: 32, name: null, img: null, count: 1 },
  { id: 33, name: null, img: null, count: 1 },
  { id: 34, name: null, img: null, count: 1 },
  { id: 35, name: null, img: null, count: 1 },
  { id: 36, name: null, img: null, count: 1 },
];

const KitLegendTMNext = () => {
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

export default KitLegendTMNext;
