import type { Metadata } from "next";
import { turret, workSans } from "@/lib/fonts";
import Providers from "./Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anastasia Vojkic",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${turret.variable} ${workSans.variable}`}>
    <body>
    <Providers>{children}</Providers>
    </body>
    </html>
  );
}
