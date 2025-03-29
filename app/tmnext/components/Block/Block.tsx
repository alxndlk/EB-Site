import React from "react";
import styles from "./Block.module.css";
import { modsListImages } from "../constants";
import Image from "next/image";

export const Block = () => {
  const chunkSize = Math.ceil(modsListImages.length / 4);
  const chunks = [
    modsListImages.slice(0, chunkSize),
    modsListImages.slice(chunkSize, chunkSize * 2),
    modsListImages.slice(chunkSize * 2, chunkSize * 3),
    modsListImages.slice(chunkSize * 3),
  ];

  return (
    <div className={styles.blockContainer}>
      {chunks.map((chunk, chunkIndex) => (
        <div
          key={chunkIndex}
          className={`${styles.block} ${
            chunkIndex % 2 === 0 ? styles.moveRight : styles.moveLeft
          }`}
        >
          {chunk.map((src, index) => (
            <div key={index} className={styles.imageContainer}>
              <Image
                src={src}
                width={1920}
                height={1080}
                alt={`Mod ${index + 1}`}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
