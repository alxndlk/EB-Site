"use client";

import "./globals.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AuthProvider } from "./Providers";
import { montserrat, cyrillic } from "./fonts/fonts";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Preloader from "@/components/Preloader/Preloader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true); // Начало загрузки
    const timeout = setTimeout(() => setLoading(false), 750); // Имитируем загрузку
    return () => clearTimeout(timeout); // Очистка таймера при переходе
  }, [pathname]); // Зависимость от изменения пути

  return (
    <html lang="ru">
      <head>
        <title>Эпоха Блоков</title>
        <meta
          name="description"
          content="Лучшие сервера Minecraft с модами. Мир безграничных возможностей! Исследуйте и создавайте вместе с нами."
        />
        <meta name="author" content="Эпоха Блоков Team" />
        <meta
          name="keywords"
          content="Minecraft, моды, сервера, игры, создание, исследование, эпоха, блоков, маикрафт"
        />
        <link rel="icon" href="/logo.ico" />
      </head>
      <body className={`${montserrat.className} ${cyrillic.className}`}>
        {loading ? (
          <Preloader>
            <div></div>
          </Preloader>
        ) : (
          <AuthProvider>
            {children}
            <Analytics />
            <SpeedInsights />
          </AuthProvider>
        )}
      </body>
    </html>
  );
}
