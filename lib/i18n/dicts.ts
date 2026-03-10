import type { Locale } from "@/constants/i18n";

import frCommon from "@/translations/fr/common.json";
import enCommon from "@/translations/en/common.json";
import frAgendapp from "@/translations/fr/projects/agendapp.json";
import enAgendapp from "@/translations/en/projects/agendapp.json";
import frNTArchi from "@/translations/fr/projects/ntarchi.json";
import enNTArchi from "@/translations/en/projects/ntarchi.json";
import frSwapItUp from "@/translations/fr/projects/swapitup.json";
import enSwapItUp from "@/translations/en/projects/swapitup.json";
import frInProgress from "@/translations/fr/projects/inprogress.json";
import enInProgress from "@/translations/en/projects/inprogress.json";


const translations = {
  fr: {
    common: frCommon,
    projects: {
      agendapp: frAgendapp,
      ntarchi: frNTArchi,
      swapitup: frSwapItUp,
      inprogress: frInProgress,
    },
  },
  en: {
    common: enCommon,
    projects: {
      agendapp: enAgendapp,
      ntarchi: enNTArchi,
      swapitup: enSwapItUp,
      inprogress: enInProgress,
    },
  },
} as const;

export type Common = (typeof translations)[Locale]["common"];
export function getCommon(locale: Locale): Common {
  return translations[locale].common;
}

export type ProjectKey = keyof (typeof translations)[Locale]["projects"];
export type ProjectDict<K extends ProjectKey> =
  (typeof translations)[Locale]["projects"][K];
export function getProject<K extends ProjectKey>( locale: Locale, key: K ): ProjectDict<K> {
  return translations[locale].projects[key];
}




