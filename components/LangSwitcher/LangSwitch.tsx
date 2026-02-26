"use client";
import { usePathname, useRouter } from "next/navigation";
import { LOCALES, type Locale } from "@/constants/i18n";

export function LangSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
  const other = current === "fr" ? "en" : "fr";
  const newPath = pathname.replace(`/${current}`, `/${other}`);

  return (
    <button onClick={() => router.push(newPath)}>
      {other.toUpperCase()}
    </button>
  );
}
