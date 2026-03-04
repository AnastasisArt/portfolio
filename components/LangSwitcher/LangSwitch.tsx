"use client";
import { usePathname, useRouter } from "next/navigation";
import { LOCALES, type Locale } from "@/constants/i18n";
import { SwitchWrap, LangButton, Sep } from "./styles";
import { intersperse } from "@/lib/ui/intersperse";
import { setLocale } from "@/lib/i18n/routing";

export default function LangSwitch({ currentLocale }: { currentLocale: Locale }) {
  const router = useRouter();
  const pathname = usePathname() || `/${currentLocale}`;

  const handleChange =(targetLocale: Locale)=> {
    if (targetLocale === currentLocale) return;
    const updatedPath = setLocale(pathname, targetLocale);

    const search = window.location.search; //"" or "?a=1"
    const hash = window.location.hash; //"" or "#section"

    router.push(`${updatedPath}${search}${hash}`);
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
