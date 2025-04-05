import {
  Montserrat,
  Cormorant_SC,
  Press_Start_2P,
  VT323,
} from "next/font/google";

export const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });
export const cyrillic = Cormorant_SC({
  subsets: ["cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const minecraft = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
});
