import type { Metadata } from "next";
import { turret, workSans } from "@/lib/fonts";
import StyledComponentsRegistry from "@/lib/registry";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Anastasia Vojkic",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="fr" className={`${turret.variable} ${workSans.variable}`}>
    <body>
      <StyledComponentsRegistry>
        {children}
        <Analytics />
      </StyledComponentsRegistry>
    </body>
    </html>
  );
}
