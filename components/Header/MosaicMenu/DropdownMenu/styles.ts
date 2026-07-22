import styled, { keyframes } from 'styled-components';
import { COLORS, TYPOGRAPHY, BP } from '@/constants';
import { workSans } from '@/lib/fonts';

const slideDown = keyframes`
  from { opacity: 0; transform: translate(-50%, -20px); }
  to { opacity: 1; transform: translate(-50%, 0); }
`;
const slideUp = keyframes`
  from { opacity: 1; transform: translate(-50%, 0); }
  to { opacity: 0; transform: translate(-50%, -20px); }
`;

export const DropdownWrap = styled.div`
  position: fixed;
  z-index: 9999;
  display: flex;
  justify-content: center;
  width: min(300px, calc(100vw - 2rem));
  pointer-events: auto;
  overflow: visible;
  transform-origin: top center;

  &.open {
    animation: ${slideDown} 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
  &.close {
    animation: ${slideUp} 0.3s ease forwards;
  }
`;

export const DropdownContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0;
  flex-wrap: nowrap;
  position: relative;
  padding: 4px;
  border-radius: 24px;
  min-width: 280px;
  max-width: 300px;
  width: 100%;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: ${COLORS.menuMobile};
    z-index: -2;
  }
  &::after {
    content: '';
    position: absolute;
    inset: 4px;
    border-radius: calc(24px - 2px);
    background: ${COLORS.lilac};
    z-index: -1;
  }
`;

export const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 8px;
  flex-wrap: nowrap;
  width: 100%;
  padding: 12px 12px;
  background: ${COLORS.lilac};
  border-radius: 0 0 22px 22px;
`;

export const ContactLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 8px;
  flex-wrap: nowrap;
  font-family: ${workSans.style.fontFamily};
  font-weight: ${TYPOGRAPHY.fw.regular};
  font-size: ${TYPOGRAPHY.fs.md};
  cursor: pointer;
  user-select: none;
  color: ${COLORS.bg};
  text-decoration: none;
  padding-block: 2px;
  
  @media (min-width: ${BP.lg}) {
    font-size: ${TYPOGRAPHY.fs.sm};
  }
`;