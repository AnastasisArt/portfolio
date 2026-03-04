export const COLORS = {
  primary: "#f2f2f2",
  secondary: "#FCC5CA",
  tertiary: "#f9ad2a",

  white: "#ffffff",
  black: "#160029",
  grey: "#666666",

  bg: "#070726",
  lightblue: "#bfd3ff",
  bluesky: "#8acbff",
  lilac: "#EEE8F6",

  menuMobile: `linear-gradient(
    135deg,
    #9adcf2,
    #f7b6d0,
    #f9e08e,
    #c3a3ee
  )`,
} as const;

export type ColorKey = keyof typeof COLORS;
