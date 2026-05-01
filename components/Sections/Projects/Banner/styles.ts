import styled, { keyframes, css } from 'styled-components';
import {BP, COLORS, TYPOGRAPHY} from '@/constants';
import { turret } from "@/lib/fonts";

const DURATION_IN_MS = 520;
const DURATION_OUT_MS = 320;
const EASE_IN = 'cubic-bezier(.16, 1, .3, 1)';
const EASE_OUT = 'cubic-bezier(.2, .7, .3, 1)';

const enter = keyframes`
  0%   { opacity: 0; transform: translate3d(0, -10px, 0) scale(0.985); }
  60%  { opacity: 1; transform: translate3d(0,  0px, 0)  scale(1.000); }
  100% { opacity: 1; transform: translate3d(0,  0px, 0)  scale(1.000); }
`;

type ContainerProps = { $visible: boolean };

const visibleStyles = css<ContainerProps>`
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
  pointer-events: auto;
  animation: ${enter} ${DURATION_IN_MS}ms ${EASE_IN} 1;
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  flex-wrap: nowrap;
  gap: 0;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  background-color: ${COLORS.secondary};
  color: ${COLORS.secondary};
  font-family: ${turret.style.fontFamily};
  font-weight: ${TYPOGRAPHY.fw.extraBold};
  text-transform: uppercase;
  font-size: clamp(1.2rem, 0.7rem + 2.5vw, 3.5rem);
  @media (min-width: ${BP.lg}) {
    font-size: clamp(1rem, 0.5rem + 2vw, 3rem);
  }
  line-height: 0.6;
  white-space: nowrap;
  padding-top: 0.12em;
  -webkit-text-stroke: 1px ${COLORS.bg};
  z-index: 1000;
  
  /* smooth exit */
  opacity: 0;
  transform: translate3d(0, -10px, 0) scale(0.985);
  pointer-events: none;
  
  /* transition toggles */
  transition:
    opacity ${DURATION_OUT_MS}ms ${EASE_OUT},
    transform ${DURATION_OUT_MS}ms ${EASE_OUT};
  
  ${({ $visible }) => ($visible ? visibleStyles : null)} 
  
  /* perf & accessibility */
  will-change: opacity, transform;
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    transition: none !important;
    transform: none !important;
  }
`;