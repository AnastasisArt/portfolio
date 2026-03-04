import type { Locale } from "@/constants/i18n";
import { isLocale } from "./locale";

//Replace locale segment in a pathname if present, otherwise insert it
export function setLocale( pathname: string, targetLocale: Locale ): string {
  const segments = pathname.split("/");
  const first = segments[1];

  if (first && isLocale(first)) segments[1] = targetLocale;
  else segments.splice(1, 0, targetLocale);

  const nextPath = segments.join("/");
  return nextPath === "" ? `/${targetLocale}` : nextPath;
}