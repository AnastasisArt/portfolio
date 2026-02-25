import localFont from "next/font/local";

export const futura = localFont({
  src: [
    { path: "../../public/fonts/FuturaCyrillicLight.ttf", weight: "300" },
    { path: "../../public/fonts/FuturaCyrillicBook.ttf", weight: "400" },
    { path: "../../public/fonts/FuturaCyrillicMedium.ttf", weight: "500" },
    { path: "../../public/fonts/FuturaCyrillicDemi.ttf", weight: "600" },
    { path: "../../public/fonts/FuturaCyrillicBold.ttf", weight: "700" },
    { path: "../../public/fonts/FuturaCyrillicExtraBold.ttf", weight: "800" },
    { path: "../../public/fonts/FuturaCyrillicHeavy.ttf", weight: "900" },
  ],
  variable: "--font-futura",
  display: "swap",
});

export const workSans = localFont({
  src: [
    { path: "../../public/fonts/WorkSansVariableFontwght.ttf", weight: "100 900" },
    { path: "../../public/fonts/WorkSansItalicVariableFontwght.ttf", weight: "100 900", style: "italic" },
  ],
  variable: "--font-work",
  display: "swap",
});
