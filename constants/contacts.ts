import type { IconKey } from '@/constants/icons';

export type ContactItem = {
  href: string;
  label: string;
  icon: IconKey;
  target?: '_blank';
  rel?: string;
};

export const CONTACTS: ContactItem[] = [
  {
    href: 'mailto:vojkic.a@protonmail.com',
    label: 'vojkic.a@protonmail.com',
    icon: 'mail',
  },
  {
    href: "https://www.linkedin.com/in/anastasia-v-862124321/",
    label: "Anastasia V.",
    icon: "linkedin",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    href: 'https://github.com/AnastasisArt',
    label: 'AnastasisArt',
    icon: 'github',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    href: 'https://discordapp.com/users/773215273029337169',
    label: 'anastasis_art',
    icon: 'discord',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];
