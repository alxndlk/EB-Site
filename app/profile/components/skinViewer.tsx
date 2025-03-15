import { useUserData } from "@/hooks/useUserData";
import React, { useEffect, useRef, useState } from "react";

import { SkinViewer, WalkingAnimation } from "skinview3d";
import Skeleton from "react-loading-skeleton";

const SkinViewerComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { userData } = useUserData();
  const [skinUrl, setSkinUrl] = useState<string | null>(null);
  const [capeUrl, setCapeUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<Boolean | null>(true);

  useEffect(() => {
    if (!userData?.uuid) return;

    const fetchSkin = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/skins", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ uuid: userData?.uuid }),
        });

        if (!res.ok) {
          setSkinUrl("/default.png");
          return;
        }

        const blob = await res.blob();
        const localUrl = URL.createObjectURL(blob);
        setSkinUrl(localUrl);
        setLoading(false);
      } catch (error) {
        console.error("Ошибка загрузки скина:", error);
        setSkinUrl("/default.png");
      }
    };

    const fetchCape = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/cloaks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ uuid: userData?.uuid }),
        });

        if (!res.ok) {
          setCapeUrl(null);
          return;
        }

        const blob = await res.blob();
        const localUrl = URL.createObjectURL(blob);
        setCapeUrl(localUrl);
        setLoading(false);
      } catch (error) {
        console.error("Ошибка загрузки плаща:", error);
        setCapeUrl(null);
      }
    };

    fetchSkin();
    fetchCape();
  }, [userData?.uuid]); // Зависимость от userData?.uuid для загрузки скина и плаща

  useEffect(() => {
    if (!canvasRef.current || !skinUrl) return;

    const skinViewer = new SkinViewer({
      canvas: canvasRef.current,
      width: 500,
      height: 700,
      pixelRatio: "match-device",
      skin: skinUrl,
    });

    const walkingAnimation = new WalkingAnimation();
    skinViewer.animation = walkingAnimation;
    skinViewer.animation.speed = 0.5;

    return () => {
      skinViewer.dispose();
      URL.revokeObjectURL(skinUrl);
    };
  }, [skinUrl]);

  return (
    <div>
      {!loading && <canvas ref={canvasRef} />}
      {loading && (
        <Skeleton
          width={595}
          height={600}
          baseColor="transparent"
          borderRadius={10}
          highlightColor="#ffffff1a"
        />
      )}
    </div>
  );
};

export default SkinViewerComponent;
