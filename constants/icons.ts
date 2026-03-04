import { FaGithub, FaLinkedin, FaAt, FaDiscord, FaPlay, FaPause } from "react-icons/fa";

export const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: FaAt,
  discord: FaDiscord,
  play: FaPlay,
  pause: FaPause,
} as const;

export type IconKey = keyof typeof ICONS;
