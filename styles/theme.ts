import { COLORS, TYPOGRAPHY } from "@/constants";

export const theme = {
  colors: COLORS,
  typography: TYPOGRAPHY,
} as const;

export type Theme = typeof theme;
