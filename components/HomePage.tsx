import Container from "@/components/ui/BaseContainer/Container";
import About from '@/components/Sections/About/About';
import Projects from '@/components/Sections/Projects/Projects';
import Contact from '@/components/Sections/Contact/Contact';
import type {Common, ProjectKey, ProjectDict} from '@/lib/i18n/dicts';
import {Locale} from '@/constants/i18n';

type ProjectDicts = { [K in ProjectKey]: ProjectDict<K>; };
type Props = {
  lang: Locale;
  common: Common;
  projects: ProjectDicts;
};

export default function HomePage({ lang, common, projects }: Props) {
  return (
    <>
      <Container>
        <About
          subtitle_role={common.subtitle_role}
          about_text={common.about_text}
        />
      </Container>

      <Projects lang={lang} common={common} projects={projects} />

      <Container>
        <Contact />
      </Container>
    </>
  );
}