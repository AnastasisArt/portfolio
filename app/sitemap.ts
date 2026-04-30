import { MetadataRoute } from 'next';
import { LOCALES } from '@/constants/i18n';
import { SITE_URL } from "@/constants/url";
import { PROJECTS, PROJECT_LAST_MODIFIED } from "@/constants/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.flatMap((lang)=> [
    { url: `${SITE_URL}/${lang}`, lastModified: new Date() },

    ...PROJECTS
      .filter((slug)=> PROJECT_LAST_MODIFIED[slug] !== undefined)
      .map((slug)=> ({
        url: `${SITE_URL}/${lang}/projects/${slug}`,
        lastModified: new Date(PROJECT_LAST_MODIFIED[slug]!),
      })),
  ]);
}