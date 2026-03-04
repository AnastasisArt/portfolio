import styled from 'styled-components';
import { BP } from "@/constants";

/**
 * WARNING
 * Not refactored to mobile-first
 * ---> Touching this may break the horizontal scroll
 * / ! \ Review later
 */

export const ProjectsWrapper = styled.section`
  position: relative;
  width: 100%;
  overflow-x : hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Anchor = styled.div`
  position: relative;
  height: 0;
  width: 100%;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: nowrap;
  gap: 0;
  height: 100vh;
  width: 100%;
  will-change: transform;
  z-index: 1;
  transition: transform 0.28s cubic-bezier(0.22, 0.61, 0.36, 1);

  @media (max-width: ${BP.xl}) {
    height: auto;
    flex-direction: column;
    position: static !important;
    transform: none !important;
  }
`;

export const Slide = styled.div`
  flex: 0 0 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 0;
  padding-bottom: 8rem;

  & > * {
    width: 100%;
  }
  &.last-project {
    padding-bottom: 0;
  }

  @media (max-width: ${BP.lg}) {
    flex: 1 0 auto;
    width: 100%;
    height: auto;
  }
`;