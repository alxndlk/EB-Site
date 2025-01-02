import { useUserData } from "@/hooks/useUserData";
import React, { useEffect, useRef } from "react";
import { SkinViewer, WalkingAnimation } from "skinview3d";

const SkinViewerComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const { userData } = useUserData();

  useEffect(() => {
    if (!canvasRef.current) return;

    const skinViewer = new SkinViewer({
      canvas: canvasRef.current,
      width: 500,
      height: 700,
      pixelRatio: "match-device",
      skin: userData?.skin,
    });

    const walkingAnimation = new WalkingAnimation();
    skinViewer.animation = walkingAnimation;
    skinViewer.animation.speed = 0.5;

    return () => {
      skinViewer.dispose();
    };
  }, [userData?.skin]);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default SkinViewerComponent;
