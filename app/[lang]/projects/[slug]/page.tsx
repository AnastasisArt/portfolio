import { notFound } from "next/navigation";
import type { ReactNode } from 'react';
import { LOCALES, type Locale } from "@/constants/i18n";
import { isLocale } from "@/lib/i18n/locale";
import { getProject, type ProjectKey } from "@/lib/i18n/dicts";
import Container from "@/components/ui/BaseContainer/Container";
import InProgressDetails from "@/components/Sections/Projects/_InProgress/Details";
import NTArchiDetails from "@/components/Sections/Projects/_NTArchi/Details";
import AgendAppDetails from "@/components/Sections/Projects/_AgendApp/Details";
import SwapItUpDetails from "@/components/Sections/Projects/_SwapItUp/Details";

type PageProps = {
  params: Promise<{ lang: string; slug: string; }>
};

const PROJECT_DETAIL_RENDERERS = {
  inprogress: (lang: Locale)=> ( <InProgressDetails dict={getProject(lang, "inprogress")} /> ),
  ntarchi: (lang: Locale)=> ( <NTArchiDetails dict={getProject(lang, "ntarchi")} /> ),
  agendapp: (lang: Locale)=> ( <AgendAppDetails dict={getProject(lang, "agendapp")} /> ),
  swapitup: (lang: Locale)=> ( <SwapItUpDetails dict={getProject(lang, "swapitup")} /> )
} satisfies Record<ProjectKey, (lang: Locale)=> ReactNode>;
type ProjectSlug = keyof typeof PROJECT_DETAIL_RENDERERS;

function isProjectSlug(value: string): value is ProjectSlug {
  return value in PROJECT_DETAIL_RENDERERS;
}

export function generateStaticParams() {
  return LOCALES.flatMap((lang)=>
    Object.keys(PROJECT_DETAIL_RENDERERS).map((slug)=> ({ lang, slug }))
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