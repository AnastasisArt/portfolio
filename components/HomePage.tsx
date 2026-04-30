import Container from "@/components/ui/BaseContainer/Container";
import About from '@/components/Sections/About/About';
import Projects from '@/components/Sections/Projects/Projects';
import Contact from '@/components/Sections/Contact/Contact';
import type {Common, ProjectDict} from '@/lib/i18n/dicts';
import {Locale} from '@/constants/i18n';

type Props = {
  lang: Locale;
  common: Common;
  inprogress: ProjectDict<"inprogress">;
  ntarchi: ProjectDict<"ntarchi">;
  agendapp: ProjectDict<"agendapp">;
  swapitup: ProjectDict<"swapitup">;
};

export default function HomePage({ lang, common, inprogress, ntarchi, agendapp, swapitup }: Props) {
  return (
    <>
      <Container>
        <About
          subtitle_role={common.subtitle_role}
          about_text={common.about_text}
        />
      </Container>

      <Projects
        lang={lang}
        common={common}
        inprogress={inprogress}
        ntarchi={ntarchi}
        agendapp={agendapp}
        swapitup={swapitup}
      />

      <Container>
        <Contact />
      </Container>
    </>
  );
}