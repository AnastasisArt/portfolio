export const TYPOGRAPHY = {
  fontSize: {
    xs: "clamp(12px, 1.4vw, 14px)",
    sm: "clamp(14px, 1.6vw, 16px)",
    md: "clamp(16px, 2vw, 20px)",
    lg: "clamp(18px, 2.5vw, 24px)",
    xl: "clamp(24px, 3.5vw, 32px)",
    xxl: "clamp(28px, 4vw, 40px)",
    xxxl: "clamp(34px, 4.7vw, 52px)",
  },
  fontWeight: {
    light: "300",
    regular: "400",
    medium: "500",
    semiBold: "600",
    bold: "700",
    extraBold: "800",
    black: "900",
  },
} as const;

export type TypographyKey = keyof typeof TYPOGRAPHY;
