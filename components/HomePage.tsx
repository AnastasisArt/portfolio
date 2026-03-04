import { Hero } from './styles';
import Header from '@/components/Header/Header';
import About from '@/components/Sections/About/About';
import Projects from '@/components/Sections/Projects/Projects';
import type {Common, ProjectDict} from '@/lib/i18n/dicts';

type Props = {
  common: Common;
  ntarchi: ProjectDict<"ntarchi">;
  agendapp: ProjectDict<"agendapp">;
  swapitup: ProjectDict<"swapitup">;
};

export default function Home({ common, ntarchi, agendapp, swapitup }: Props) {
  return (
    <>
      <Hero>
        <Header labels={common.sections} />
      </Hero>

      <About
        subtitle_role={common.subtitle_role}
        about_text={common.about_text}
      />
      <Projects ntarchi={ntarchi} agendapp={agendapp} swapitup={swapitup} />
    </>
  );
}