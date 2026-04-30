import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LOCALES } from "@/constants/i18n";
import { isLocale } from "@/lib/i18n/locale";
import { getCommon } from "@/lib/i18n/dicts";
import Providers from "@/app/Providers";

import LangSwitch from "@/components/LangSwitcher/LangSwitch";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Container from "@/components/ui/BaseContainer/Container";

const SITE_URL = "https://anastasia-vojkic.dev";
const OG_IMAGE = "/logo-48.png";

export function generateStaticParams() {
  return LOCALES.map((lang)=> ({ lang }));
}

async function getLocaleCommon(params: Promise<{ lang: string }>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const common = getCommon(lang);
  return { lang, common };
}

type LangProps = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: LangProps): Promise<Metadata> {
  const { lang, common } = await getLocaleCommon(params);

  const title = common.meta?.title ?? "Anastasia Vojkic";
  const description = common.meta?.description ?? "";

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        fr: "/fr",
        en: "/en",
        "x-default": "/fr",
      },
    },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/${lang}`,
      siteName: "Anastasia Vojkic",
      title,
      description,
      locale: lang === "fr" ? "fr_FR" : "en_US",
      images: [{ url: OG_IMAGE, width: 48, height: 48 }],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

export default async function LangLayout({ children, params }: LangProps) {
  const { lang, common } = await getLocaleCommon(params);

  return (
    <Providers>
      <Container>
        <LangSwitch currentLocale={lang} />
        <Header labels={common.sections} lang={lang} />
      </Container>
      {children}
      <Footer quotes={common.footer.fun_quotes} />
    </Providers>
  );
}
