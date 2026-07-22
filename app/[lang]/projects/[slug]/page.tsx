import { notFound } from "next/navigation";
import type { ReactNode } from 'react';
import { LOCALES, type Locale } from "@/constants/i18n";
import { isLocale } from "@/lib/i18n/locale";
import { getProject } from "@/lib/i18n/dicts";
import { PROJECTS } from "@/constants/projects";
import Container from "@/components/ui/BaseContainer/Container";
import ZonaDetails from "@/components/Sections/Projects/_Zona/Details";
import NTArchiDetails from "@/components/Sections/Projects/_NTArchi/Details";
import AgendAppDetails from "@/components/Sections/Projects/_AgendApp/Details";
import SwapItUpDetails from "@/components/Sections/Projects/_SwapItUp/Details";

type PageProps = {
  params: Promise<{ lang: string; slug: string; }>
};

type ProjectSlug = (typeof PROJECTS)[number];
const PROJECT_DETAIL_RENDERERS = {
  zona: (lang: Locale)=> ( <ZonaDetails dict={getProject(lang, "zona")} /> ),
  ntarchi: (lang: Locale)=> ( <NTArchiDetails dict={getProject(lang, "ntarchi")} /> ),
  agendapp: (lang: Locale)=> ( <AgendAppDetails dict={getProject(lang, "agendapp")} /> ),
  swapitup: (lang: Locale)=> ( <SwapItUpDetails dict={getProject(lang, "swapitup")} /> )
} satisfies Record<ProjectSlug, (lang: Locale)=> ReactNode>;

function isProjectSlug(value: string): value is ProjectSlug {
  return PROJECTS.includes(value as ProjectSlug);
}

export function generateStaticParams() {
  return LOCALES.flatMap((lang)=>
    PROJECTS.map((slug)=> ({ lang, slug }))
  );
}

function renderProjectDetails(lang: Locale, slug: ProjectSlug) {
  return PROJECT_DETAIL_RENDERERS[slug](lang);
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  if (!isProjectSlug(slug)) notFound();

  return <Container>{renderProjectDetails(lang, slug)}</Container>;
}