import "./globals.css";
import { AuthProvider } from "./Providers";
import { montserrat } from "./fonts/fonts";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <link rel="icon" href="./logo.ico" />
      </head>
      <body className={montserrat.className}>
        <AuthProvider>
          {children}
          <Analytics />
          <SpeedInsights />
        </AuthProvider>
      </body>
    </html>
  );
}
