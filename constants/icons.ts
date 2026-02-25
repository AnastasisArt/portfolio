import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: FaEnvelope,
} as const;

export type IconKey = keyof typeof ICONS;
