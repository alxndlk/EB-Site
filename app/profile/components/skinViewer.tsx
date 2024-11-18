import React, { useEffect, useRef } from "react";
import { SkinViewer, WalkingAnimation  } from "skinview3d";

const SkinViewerComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const skinViewer = new SkinViewer({
      canvas: canvasRef.current,
      width: 600,
      height: 800,
      skin: "/default_skin.png",
    });

    const walkingAnimation = new WalkingAnimation();
    skinViewer.animation = walkingAnimation;
    skinViewer.animation.speed = 0.5;

    return () => {
      skinViewer.dispose();
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default SkinViewerComponent;
