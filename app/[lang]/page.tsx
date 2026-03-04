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
  const ntarchi = getProject(lang, "ntarchi");
  const agendapp = getProject(lang, "agendapp");
  const swapitup = getProject(lang, "swapitup");

  return (
    <HomePage
      common={common}
      ntarchi={ntarchi}
      agendapp={agendapp}
      swapitup={swapitup}
    />
  );
}
