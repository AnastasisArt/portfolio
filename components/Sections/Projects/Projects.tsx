import React from "react";
import ProjectsClient from "./ProjectsClient";
import InProgress from "./_InProgress/InProgress";
import NTArchi from "./_NTArchi/NTArchi";
import Agendapp from "./_AgendApp/AgendApp";
import SwapItUp from "./_SwapItUp/SwapItUp";
import { Slide } from "./styles";
import type {Common, ProjectDict} from "@/lib/i18n/dicts";
import {Locale} from '@/constants/i18n';

type Props = {
  lang: Locale;
  common: Common;
  inprogress: ProjectDict<"inprogress">;
  ntarchi: ProjectDict<"ntarchi">;
  agendapp: ProjectDict<"agendapp">;
  swapitup: ProjectDict<"swapitup">;
};

export default function Projects({ lang, common, inprogress, ntarchi, agendapp, swapitup }: Props) {
  return (
    <ProjectsClient>
      <Slide>
        <InProgress dict={inprogress} common={common} detailsHref={`/${lang}/projects/inprogress`} />
      </Slide>

      <Slide>
        <NTArchi dict={ntarchi} />
      </Slide>

      <Slide>
        <Agendapp dict={agendapp} />
      </Slide>

      <Slide className="last-project">
        <SwapItUp dict={swapitup} />
      </Slide>
    </ProjectsClient>
  );
}
