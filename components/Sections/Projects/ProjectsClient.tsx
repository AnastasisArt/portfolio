"use client";
import React, { useRef, useState } from "react";
import Banner from "@/components/Sections/Projects/Banner/Banner";
import { ProjectsWrapper, Anchor, Inner } from "./styles";
import { useProjectsScroll } from "@/hooks/ProjectsScroll/useProjectsScroll";
import { PROJECTS } from "@/constants/projects";

type Props = { children: React.ReactNode; };

export default function ProjectsClient({ children }: Props) {
  const projectsRef = useRef<HTMLElement | null>(null);
  const anchorRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  const nbProjects = PROJECTS.length;

  useProjectsScroll({
    projectsRef,
    anchorRef,
    innerRef,
    nbProjects,
    setShowBanner,
  });

  return (
    <ProjectsWrapper ref={projectsRef} id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title" className="sr-only">Réalisations</h2>
      <Banner visible={showBanner} />
      <Anchor ref={anchorRef} />

      <Inner ref={innerRef}>{children}</Inner>
    </ProjectsWrapper>
  );
}
