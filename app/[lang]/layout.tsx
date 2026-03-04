import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { LOCALES, type Locale } from "@/constants/i18n";
import { isLocale } from "@/lib/i18n/locale";
import { getCommon } from "@/lib/i18n/dicts";

import Providers from "@/app/Providers";
import LangSwitch from "@/components/LangSwitcher/LangSwitch";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Container from "@/components/BaseContainer/Container";

export function generateStaticParams() {
  return LOCALES.map((lang)=> ({ lang }));
}

type LangProps = {
  children: ReactNode;
  params: Promise<{ lang: Locale }>;
};

export default async function LangLayout({ children, params }: LangProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const common = getCommon(lang);

  return (
    <Providers>
      <Container>
        <LangSwitch currentLocale={lang} />
        <Header labels={common.sections} />
      </Container>
      {children}
      <Footer quotes={common.footer.fun_quotes} />
    </Providers>
  );
}
