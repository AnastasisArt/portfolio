export const BP_PX = {
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
  "3xl": 1920,
} as const;
export type BreakpointKey = keyof typeof BP_PX;

export const BP = {
  sm: `${BP_PX.sm}px`,
  md: `${BP_PX.md}px`,
  lg: `${BP_PX.lg}px`,
  xl: `${BP_PX.xl}px`,
  "2xl": `${BP_PX["2xl"]}px`,
  "3xl": `${BP_PX["3xl"]}px`,
} as const;

