import { useEffect } from 'react';
import type { RefObject } from 'react';
import {
  getAbsTop,
  setInnerAsNormalBlock,
  setInnerStaticFullWidth,
  setInnerFixedForScroll,
  setInnerAtEndOfSection,
} from './helpers';
import { BP_PX } from "@/constants";

type UseProjectsScrollParams = {
  projectsRef: RefObject<HTMLElement | null>;
  anchorRef: RefObject<HTMLDivElement | null>;
  innerRef: RefObject<HTMLDivElement | null>;
  nbProjects: number;
  HEADER_OFFSET?: number;
  SCROLL_SLOW_FACTOR?: number;
  setShowBanner: (visible: boolean) => void;
};

export const useProjectsScroll = ({
  projectsRef,
  anchorRef,
  innerRef,
  nbProjects,
  HEADER_OFFSET = 0,
  SCROLL_SLOW_FACTOR = 1.5,
  setShowBanner,
}: UseProjectsScrollParams): void => {
  useEffect(() => {
    const projects = projectsRef.current;
    const anchor = anchorRef.current;
    const inner = innerRef.current;

    //if 1 of the refs is null -> return
    if (!projects || !anchor || !inner) return;

    const compute = (): void => {
      //top position of the viewport in the page (header into account)
      const viewportTop = window.scrollY + HEADER_OFFSET;
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      //mobile/tablet < 1024px ---> classic vertical behavior
      const isMobile = viewportWidth < BP_PX.lg;
      //position verticale absolue du début de Projects
      const projectsTop = getAbsTop(projects);

      //-------- MOBILE / TABLET --> normal vertical scroll --------
      if (isMobile) {
        //natural sizing
        projects.style.height = 'auto';

        //the rail becomes a normal block in the flow again
        setInnerStaticFullWidth(inner);

        //bottom of the projects section (real height)
        const projectsBottom = projectsTop + projects.offsetHeight;
        const anchorTopMobile = getAbsTop(anchor);

        //viewport inside Projects section?
        const inProjectsMobile =
          viewportTop >= projectsTop && viewportTop < projectsBottom;
        //anchor passed?
        const pastAnchorMobile = viewportTop >= anchorTopMobile;
        //banner visible only if in the section & anchor passed
        setShowBanner(inProjectsMobile && pastAnchorMobile);
        return;
      }

      //-------- DESKTOP ---> horizontal scroll --------

      // - nbProjects * viewportHeight = one screen/project
      // - multiplied by SCROLL_SLOW_FACTOR to slow down scroll progression
      const SECTION_HEIGHT = viewportHeight * nbProjects * SCROLL_SLOW_FACTOR;

      //extra margin after last project to mark pause time
      const EXIT_BUFFER = viewportHeight * 0.08;

      //total height given to the section -> horizontal scroll part + exit buffer
      const TOTAL_HEIGHT = SECTION_HEIGHT + EXIT_BUFFER;

      //force section to this height ---> visually reserves space in the page
      //so that native scrolling can happen
      projects.style.height = `${TOTAL_HEIGHT}px`;

      /* movement distance of the rail from 0 -> maxTranslateX :
         - when the top of the viewport goes from the start of the section
         -> to the moment the bottom of the viewport reaches the end of SECTION_HEIGHT
      */
      const scrollRange = SECTION_HEIGHT - viewportHeight;

      //if range is <= 0 ---> back to normal behavior
      if (scrollRange <= 0) {
        setInnerAsNormalBlock(inner);
        setShowBanner(false);
        return;
      }

      //absolute anchor position
      const anchorTop = getAbsTop(anchor);
      //start of horizontal timeline -> when the top of the viewport reaches the start of the section
      const startScroll = projectsTop;
      //end of horizontal movement -> when we've finished sweeping through all projects
      const endScroll = projectsTop + scrollRange;
      //moment we stop fixing the rail and place it at the bottom of the section
      const releaseScroll = endScroll + EXIT_BUFFER;

      //know where we are in the timeline
      const before = viewportTop < startScroll;
      const during =
        viewportTop >= startScroll && viewportTop <= releaseScroll;
      const after = viewportTop > releaseScroll;

      //anchor passed?
      const pastAnchor = viewportTop >= anchorTop;

      //bottom of Projects (with buffer)
      const projectsBottom = projectsTop + TOTAL_HEIGHT;

      /* wrapper rect:
         width --> know how much we need to slide in X
         left  --> fix the rail at exactly the right horizontal position */
      const projectsRect = projects.getBoundingClientRect();
      const sectionWidth = projectsRect.width;
      const sectionLeft = projectsRect.left;

      const maxTranslateX = -((nbProjects - 1) * sectionWidth);

      //--- BEFORE ---
      if (before) {
        setInnerAsNormalBlock(inner);
        setShowBanner(false);
        return;
      }

      //--- DURING (horizontal + exit pause) ---
      if (during) {
        setInnerFixedForScroll(inner, HEADER_OFFSET, sectionLeft, sectionWidth);

        const raw = viewportTop - startScroll;
        const rawClamped = Math.min(Math.max(raw, 0), scrollRange);
        const linear = rawClamped / scrollRange;
        const clamped = Math.min(Math.max(linear, 0), 1);

        const eased =
          clamped < 0.5
            ? 4 * clamped * clamped * clamped
            : 1 - Math.pow(-2 * clamped + 2, 3) / 2;

        const translateX = eased * maxTranslateX;
        inner.style.transform = `translate3d(${translateX}px, 0, 0)`;

        const BANNER_THRESHOLD_IN = 0;
        const stillInProjects = viewportTop < projectsBottom;
        const shouldShowBanner =
          pastAnchor &&
          stillInProjects &&
          clamped > BANNER_THRESHOLD_IN;

        setShowBanner(shouldShowBanner);
        return;
      }

      //--- AFTER ---
      if (after) {
        const releaseTop = releaseScroll - projectsTop;
        setInnerAtEndOfSection(inner, releaseTop, maxTranslateX);

        const projectsBottomAfter = projectsTop + TOTAL_HEIGHT;
        const stillInProjects = viewportTop < projectsBottomAfter;

        setShowBanner(stillInProjects && pastAnchor);
      }
    };

    compute();
    window.addEventListener('scroll', compute, { passive: true });
    window.addEventListener('resize', compute);

    return () => {
      window.removeEventListener('scroll', compute);
      window.removeEventListener('resize', compute);
    };
  }, [projectsRef, anchorRef, innerRef, nbProjects, HEADER_OFFSET, SCROLL_SLOW_FACTOR, setShowBanner]);
};