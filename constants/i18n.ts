export const LOCALES = ["fr", "en"] as const;
export type Locale = (typeof LOCALES)[number];