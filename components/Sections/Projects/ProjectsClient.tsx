"use client";
import React, { useRef, useState } from "react";
import Banner from "@/components/Sections/Projects/Banner/Banner";
import { ProjectsWrapper, Anchor, Inner } from "./styles";
import { useProjectsScroll } from "@/hooks/ProjectsScroll/useProjectsScroll";

type Props = { children: React.ReactNode; };

export default function ProjectsClient({ children }: Props) {
  const projectsRef = useRef<HTMLElement | null>(null);
  const anchorRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  const nbProjects = 4;

  useProjectsScroll({
    projectsRef,
    anchorRef,
    innerRef,
    nbProjects,
    setShowBanner,
  });

  return (
    <ProjectsWrapper ref={projectsRef} id="projects">
      <Banner visible={showBanner} />
      <Anchor ref={anchorRef} />

      <Inner ref={innerRef}>{children}</Inner>
    </ProjectsWrapper>
  );
}
