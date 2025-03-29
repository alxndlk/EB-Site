import { Montserrat, Cormorant_SC } from "next/font/google";

export const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });
export const cyrillic = Cormorant_SC({
  subsets: ["cyrillic"],
  weight: ["400", "500", "600", "700"],
});
