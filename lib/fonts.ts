import { Turret_Road, Work_Sans } from "next/font/google";

export const turret = Turret_Road({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-turret",
  display: "swap",
});

export const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-work",
  display: "swap",
});
