import { useState } from "react";

export const ImagesConst = [
  "/Home/12.png",
  "/Home/6.png",
  "/Home/9.png",
  "/Home/123.png",
  "/Home/sky.png",
  "/Home/19.png",
  "/Home/21.png",
];

export const urlArray = [
  "/Home/sky.png",
  "/Home/terrain.png",
  "/Home/terrain_2.png",
  "/Home/terrain_3.png",
];

export const useMainState = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showServers, setShowServers] = useState(false);
  const [swiperVisibility, setSwiperVisibility] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? urlArray.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === urlArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleServers = () => {
    setShowServers((prev) => !prev);
  };

  const toggleSwiper = () => {
    setSwiperVisibility((prev) => !prev);
  };

  const closeServers = () => {
    setShowServers(false);
  };

  return {
    currentIndex,
    setCurrentIndex,
    showServers,
    setShowServers,
    swiperVisibility,
    setSwiperVisibility,
    handlePrev,
    handleNext,
    toggleServers,
    toggleSwiper,
    closeServers,
  };
};
