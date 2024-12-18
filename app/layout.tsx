import "./globals.css";
import {AuthProvider} from './Providers'
import { montserrat } from './fonts/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Эпоха Блоков</title>
        <meta name='description' content='Description' />
        <link rel="icon" href="./logo.ico" />
      </head>
      <body className={montserrat.className}>

        <AuthProvider>
          {children}
        </AuthProvider>

      </body>
    </html>
  );
}
