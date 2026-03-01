import { FaGithub, FaLinkedin, FaAt, FaDiscord } from "react-icons/fa";

export const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: FaAt,
  discord: FaDiscord,
} as const;

export type IconKey = keyof typeof ICONS;
