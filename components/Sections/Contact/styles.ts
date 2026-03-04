import styled from 'styled-components';
import { TYPOGRAPHY, COLORS, BP } from '@/constants';

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 12px;
  text-align: center;
  max-width: 100vw;
  height: 80vh;
  box-sizing: border-box;
`;

export const IconsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 32px;
`;

export const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  width: clamp(40px, calc(40px + 32 * ((100vw - 360px) / 1080)), 72px);
  height: clamp(40px, calc(40px + 32 * ((100vw - 360px) / 1080)), 72px);
  opacity: 0.9;
  transition:
    transform 200ms ease-out,
    filter 200ms ease-out,
    opacity 200ms ease-out;
  
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  &:hover,
  &:focus-visible {
    opacity: 1;
    transform: translateY(-4px) scale(1.05);
    filter: drop-shadow(0 0 12px ${COLORS.secondary});
  }
  &:focus-visible {
    outline: 2px solid ${COLORS.secondary};
    outline-offset: 4px;
  }
`;

export const EmailLink = styled.a`
  cursor: pointer;
  user-select: none;
  font-size: ${TYPOGRAPHY.fs.xl};
  color: ${COLORS.primary};
  transition: color 200ms ease-out, transform 200ms ease-out;
  
  &:hover,
  &:focus-visible {
    opacity: 1;
    transform: translateY(-4px) scale(1.05);
    filter: drop-shadow(0 0 12px ${COLORS.secondary});
  }
`;