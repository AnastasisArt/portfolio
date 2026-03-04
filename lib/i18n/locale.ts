import { LOCALES, type Locale } from "@/constants/i18n";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
