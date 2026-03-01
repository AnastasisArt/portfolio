"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { LOCALES, type Locale } from "@/constants/i18n";
import { SwitchWrap, LangButton, Sep } from "./styles";
import { intersperse } from "@/lib/ui/intersperse";
import { setLocale } from "@/lib/i18n/routing";

export default function LangSwitch({ currentLocale }: { currentLocale: Locale }) {
  const router = useRouter();
  const pathname = usePathname() || `/${currentLocale}`;
  const searchParams = useSearchParams();

  const handleChange =(targetLocale: Locale)=> {
    if (targetLocale === currentLocale) return;

    const updatedPath = setLocale(pathname, targetLocale);
    const queryString = searchParams?.toString();
    const hashFragment = window.location.hash;

    const finalUrl = queryString
      ? `${updatedPath}?${queryString}${hashFragment}`
      : `${updatedPath}${hashFragment}`;
    router.push(finalUrl);
  };

  const buttons = LOCALES.map((locale)=> (
    <LangButton
      key={locale}
      type="button"
      data-active={currentLocale === locale || undefined}
      onClick={() => handleChange(locale)}
      aria-current={currentLocale === locale ? "page" : undefined}
    >
      {locale.toUpperCase()}
    </LangButton>
  ));

  return (
    <SwitchWrap aria-label="Language switcher">
      {intersperse(buttons, (index)=> (
        <Sep key={`sep-${index}`}>|</Sep>
      ))}
    </SwitchWrap>
  );
}
