import type { StaticImageData } from "next/image";

import ts from "@/assets/icons/typescript.png";
import py from "@/assets/icons/python.png";
import js from "@/assets/icons/javascript.png";
import java from "@/assets/icons/java.png";
import php from "@/assets/icons/php.png";
import nest from "@/assets/icons/nestjs.png";
import next from "@/assets/icons/nextjs.png";
import spring from "@/assets/icons/spring.png";
import react from "@/assets/icons/react.png";
import reactform from "@/assets/icons/react-hook-form.png";
import openapi from "@/assets/icons/openapi.png";
import i18n from "@/assets/icons/i18next.png";
import redux from "@/assets/icons/redux.png";
import styled from "@/assets/icons/styled-components.png";
import tailwind from "@/assets/icons/tailwindcss.png";
import docker from "@/assets/icons/docker.png";
import node from "@/assets/icons/nodejs.png";
import git from "@/assets/icons/git.png";
import cloudflare from "@/assets/icons/cloudflare.png";
import linux from "@/assets/icons/linux.png";
import typeorm from "@/assets/icons/typeorm.png";
import hibernate from "@/assets/icons/hibernate.png";
import postgre from "@/assets/icons/postgre.png";
import postman from "@/assets/icons/postman.png";
import swagger from "@/assets/icons/swagger.png";
import sqlite from "@/assets/icons/sqlite.png";
import stripe from "@/assets/icons/stripe.png";
import illustrator from "@/assets/icons/illustrator.png";
import photoshop from "@/assets/icons/photoshop.png";
import figma from "@/assets/icons/figma.png";

type LabelPart = {
  text: string;
  accent?: boolean;
};

export type Stack = {
  icon: StaticImageData;
  label: LabelPart[];
  url: string;
};

export const STACKS: Record<string, Stack> = {
  //--- LANGUAGES ---\\
  typescript: {
    icon: ts,
    label: [
      { text: "T", accent: true },
      { text: "YPE", accent: false },
      { text: "S", accent: true },
      { text: "CRIPT", accent: false }
    ],
    url: "https://www.typescriptlang.org/",
  },
  python: {
    icon: py,
    label: [
      { text: "P", accent: true },
      { text: "YTHON", accent: false },
    ],
    url: "https://www.python.org/",
  },
  javascript: {
    icon: js,
    label: [
      { text: "J", accent: true },
      { text: "AVA", accent: false },
      { text: "S", accent: true },
      { text: "CRIPT", accent: false },
    ],
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  java: {
    icon: java,
    label: [
      { text: "J", accent: true },
      { text: "AVA", accent: false },
    ],
    url: "https://docs.oracle.com/javase/",
  },
  php: {
    icon: php,
    label: [
      { text: "PHP", accent: true },
    ],
    url: "https://www.php.net/",
  },

  //--- FRAMEWORKS ---\\
  nest: {
    icon: nest,
    label: [
      { text: "N", accent: true },
      { text: "EST", accent: false },
      { text: "JS", accent: true },
    ],
    url: "https://nestjs.com/",
  },
  next: {
    icon: next,
    label: [
      { text: "N", accent: true },
      { text: "EXT.", accent: false },
      { text: "JS", accent: true },
    ],
    url: "https://nextjs.org/",
  },
  spring: {
    icon: spring,
    label: [
      { text: "S", accent: true },
      { text: "PRING", accent: false },
      { text: "B", accent: true },
      { text: "OOT", accent: false },
    ],
    url: "https://spring.io/projects/spring-boot",
  },
  tailwind: {
    icon: tailwind,
    label: [
      { text: "T", accent: true },
      { text: "ailwind", accent: false },
      { text: "CSS", accent: true },
    ],
    url: "https://tailwindcss.com/",
  },

  //--- LIBRARIES ---\\
  react: {
    icon: react,
    label: [
      { text: "R", accent: true },
      { text: "EACT", accent: false }
    ],
    url: "https://react.dev/",
  },
  reactnative: {
    icon: react,
    label: [
      { text: "R", accent: true },
      { text: "EACT\u00A0", accent: false },
      { text: "N", accent: true },
      { text: "ATIVE", accent: false }
    ],
    url: "https://reactnative.dev/",
  },
  reacthookform: {
    icon: reactform,
    label: [
      { text: "R", accent: true },
      { text: "EACT\u00A0", accent: false },
      { text: "H", accent: true },
      { text: "OOK\u00A0", accent: false },
      { text: "F", accent: true },
      { text: "ORM", accent: false },
    ],
    url: "https://react-hook-form.com/",
  },
  openapi: {
    icon: openapi,
    label: [
      { text: "O", accent: true },
      { text: "PEN", accent: false },
      { text: "API", accent: true },
    ],
    url: "https://www.openapis.org/",
  },
  i18next: {
    icon: i18n,
    label: [
      { text: "I", accent: false },
      { text: "18", accent: true },
      { text: "NEXT", accent: false },
    ],
    url: "https://www.i18next.com/",
  },
  redux: {
    icon: redux,
    label: [
      { text: "R", accent: true },
      { text: "EDUX", accent: false },
    ],
    url: "https://redux.js.org",
  },
  styled: {
    icon: styled,
    label: [
      { text: "S", accent: true },
      { text: "TYLED-", accent: false },
      { text: "C", accent: true },
      { text: "OMPONENTS", accent: false },
    ],
    url: "https://styled-components.com/",
  },

  //--- OTHERS ---\\
  linux: {
    icon: linux,
    label: [
      { text: "L", accent: true },
      { text: "INUX", accent: false },
    ],
    url: "https://www.linux.org/",
  },
  docker: {
    icon: docker,
    label: [
      { text: "D", accent: true },
      { text: "OCKER", accent: false },
    ],
    url: "https://www.docker.com/",
  },
  node: {
    icon: node,
    label: [
      { text: "N", accent: true },
      { text: "ODE.JS", accent: false },
    ],
    url: "https://nodejs.org/",
  },
  git: {
    icon: git,
    label: [
      { text: "GIT", accent: true },
    ],
    url: "https://git-scm.com/",
  },
  typeorm: {
    icon: typeorm,
    label: [
      { text: "T", accent: true },
      { text: "YPE", accent: false },
      { text: "ORM", accent: true },
    ],
    url: "https://typeorm.io/",
  },
  hibernate: {
    icon: hibernate,
    label: [
      { text: "H", accent: true },
      { text: "IBERNATE", accent: false },
    ],
    url: "https://hibernate.org/",
  },
  postgresql: {
    icon: postgre,
    label: [
      { text: "P", accent: true },
      { text: "OSTGRE", accent: false },
      { text: "SQL", accent: true },
    ],
    url: "https://www.postgresql.org/",
  },
  postman: {
    icon: postman,
    label: [
      { text: "P", accent: true },
      { text: "OSTMAN", accent: false },
    ],
    url: "https://www.postman.com/",
  },
  swagger: {
    icon: swagger,
    label: [
      { text: "S", accent: true },
      { text: "WAGGER", accent: false },
    ],
    url: "https://swagger.io/",
  },
  sqlite: {
    icon: sqlite,
    label: [
      { text: "SQL", accent: true },
      { text: "ITE", accent: false },
    ],
    url: "https://sqlite.org/",
  },
  cloudflare: {
    icon: cloudflare,
    label: [
      { text: "C", accent: true },
      { text: "LOUDFLARE R2", accent: false },
    ],
    url: "https://www.cloudflare.com/fr-fr/developer-platform/products/r2/",
  },
  stripe: {
    icon: stripe,
    label: [
      { text: "S", accent: true },
      { text: "TRIPE", accent: false },
    ],
    url: "https://docs.stripe.com/",
  },

  //--- DESIGN ---\\
  illustrator: {
    icon: illustrator,
    label: [
      { text: "I", accent: true },
      { text: "LLUSTRATOR", accent: false },
    ],
    url: "https://www.adobe.com/",
  },
  photoshop: {
    icon: photoshop,
    label: [
      { text: "P", accent: true },
      { text: "hotoshop", accent: false },
    ],
    url: "https://www.adobe.com/",
  },
  figma: {
    icon: figma,
    label: [
      { text: "F", accent: true },
      { text: "IGMA", accent: false },
    ],
    url: "https://www.figma.com/",
  },
};
