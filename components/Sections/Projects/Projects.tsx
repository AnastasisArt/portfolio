import React from "react";
import ProjectsClient from "./ProjectsClient";
import InProgress from "./_InProgress/InProgress";
import NTArchi from "./_NTArchi/NTArchi";
import Agendapp from "./_AgendApp/AgendApp";
import SwapItUp from "./_SwapItUp/SwapItUp";
import { Slide } from "./styles";
import type {Common, ProjectKey, ProjectDict} from "@/lib/i18n/dicts";
import {Locale} from '@/constants/i18n';

type ProjectDicts = { [K in ProjectKey]: ProjectDict<K>; };
type Props = {
  lang: Locale;
  common: Common;
  projects: ProjectDicts;
};

export default function Projects({ lang, common, projects }: Props) {
  return (
    <ProjectsClient>
      <Slide>
        <InProgress dict={projects.inprogress} common={common} detailsHref={`/${lang}/projects/inprogress`} />
      </Slide>

      <Slide>
        <NTArchi dict={projects.ntarchi} />
      </Slide>

      <Slide>
        <Agendapp dict={projects.agendapp} />
      </Slide>

      <Slide className="last-project">
        <SwapItUp dict={projects.swapitup} />
      </Slide>
    </ProjectsClient>
  );
}
