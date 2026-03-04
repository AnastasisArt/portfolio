import React from "react";
import ProjectsClient from "./ProjectsClient";
import NTArchi from "./_NTArchi/NTArchi";
import Agendapp from "./_AgendApp/AgendApp";
import SwapItUp from "./_SwapItUp/SwapItUp";
import { Slide } from "./styles";
import type { ProjectDict } from "@/lib/i18n/dicts";

type Props = {
  ntarchi: ProjectDict<"ntarchi">;
  agendapp: ProjectDict<"agendapp">;
  swapitup: ProjectDict<"swapitup">;
};

export default function Projects({ ntarchi, agendapp, swapitup }: Props) {
  return (
    <ProjectsClient>
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
