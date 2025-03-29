import { useEffect, useRef, useState } from "react";
import styles from "./Swiper.module.css";
import { ImagesConst } from "../contants";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Swiper = ({ onClose }: { onClose: () => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Состояние для текущего изображения
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

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? ImagesConst.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === ImagesConst.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={styles.swiper_overlay}>
      <div className={styles.swiper_container} ref={containerRef}>
        <div className={styles.image_holder}>
          <div className={styles.arrows}>
            <div className={styles.arrow} onClick={handlePrev}>
              <ChevronLeft size={24} />
            </div>
            <div className={styles.arrow} onClick={handleNext}>
              <ChevronRight size={24} />
            </div>
          </div>
          <div
            className={styles.current_image}
            style={{
              backgroundImage: `url(${ImagesConst[currentImageIndex] || ""})`,
            }}
          />
        </div>

        <div className={styles.images}>
          {ImagesConst.map((image, index) => (
            <div
              key={index}
              className={styles.image_preview}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
