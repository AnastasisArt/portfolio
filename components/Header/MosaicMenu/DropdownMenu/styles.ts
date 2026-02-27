import styled, { keyframes } from 'styled-components';
import { COLORS, TYPOGRAPHY, BP } from '@/constants';

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
`;
const slideUp = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(-20px); }
`;

export const DropdownWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  gap: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 9999;
  pointer-events: auto;
  overflow: visible;
  transform-origin: top center;
  width: 100vw;
  max-width: 100vw;
  &.open {
    animation: ${slideDown} 0.35s cubic-bezier(.16,1,.3,1) forwards;
  }
  &.close {
    animation: ${slideUp} 0.3s ease forwards;
  }

  @media (min-width: ${BP.lg}) {
    position: absolute;
    left: auto;
    right: 16px;
    margin: 0;
    justify-content: flex-end;
    width: auto;
    max-width: 360px;
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
  min-width: 320px;
  max-width: 360px;
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
  font-family: var(--font-work), system-ui, sans-serif;
  font-weight: ${TYPOGRAPHY.fw.regular};
  font-size: ${TYPOGRAPHY.fs.xs};
  cursor: pointer;
  user-select: none;
  color: ${COLORS.bg};
  text-decoration: none;
  padding-block: 2px;

  @media (max-width: ${BP.md}) {
    font-size: ${TYPOGRAPHY.fs.md};
  }
`;