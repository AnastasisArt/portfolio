import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from "react-icons/fa";

export const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: FaEnvelope,
  discord: FaDiscord,
} as const;

export type IconKey = keyof typeof ICONS;
