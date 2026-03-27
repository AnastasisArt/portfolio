import { FaGithub, FaLinkedin, FaAt, FaDiscord, FaPlay, FaPause, FaChevronDown, FaChevronUp } from "react-icons/fa";

export const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: FaAt,
  discord: FaDiscord,

  //ui
  play: FaPlay,
  pause: FaPause,
  chevronDown: FaChevronDown,
} as const;

export type IconKey = keyof typeof ICONS;
