export const TYPOGRAPHY = {
  fs: {
    xxs: "clamp(11px, 0.6vw, 12px)",
    xs:  "clamp(12px, 0.7vw, 13px)",
    sm:  "clamp(13px, 0.8vw, 15px)",
    md:  "clamp(15px, 1vw, 17px)",
    lg:  "clamp(17px, 1.3vw, 20px)",
    xl:  "clamp(20px, 1.8vw, 24px)",
    xxl: "clamp(24px, 2.5vw, 30px)",
    xxxl:"clamp(32px, 4vw, 44px)",
  },
  fw: {
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
