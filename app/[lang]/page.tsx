import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/locale";
import { getCommon, getProject } from "@/lib/i18n/dicts";
import HomePage from "@/components/HomePage";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const common = getCommon(lang);
  const projects = {
    inprogress: getProject(lang, "inprogress"),
    ntarchi: getProject(lang, "ntarchi"),
    agendapp: getProject(lang, "agendapp"),
    swapitup: getProject(lang, "swapitup"),
  };

  return (
    <HomePage
      lang={lang}
      common={common}
      projects={projects}
    />
  );
}
