import styled from 'styled-components';
import Link from 'next/link';
import { COLORS, TYPOGRAPHY } from '@/constants';

export const MenuWrap = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

export const MenuList = styled.ul`
  gap:0;
  align-items: center;
  justify-content: flex-start;
  list-style: inherit;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  color: ${COLORS.secondary};
`;

export const ItemWrap = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child)::after {
    content: '||';
    color: currentColor;
    filter: brightness(1.18);
    margin: 0 18px;
    font-family: var(--font-work), system-ui, sans-serif;
    font-weight: ${TYPOGRAPHY.fw.extraBold};
  }
  &:hover::after { filter: brightness(1.28); }
`;

export const MenuItem = styled(Link)`
  cursor: pointer;
  user-select : none;
  text-decoration: none;
  color: inherit;
  display: inline-block;
  position: relative;
  transition: width 0.32s cubic-bezier(.16,1,.3,1), filter 0.18s ease;
  will-change: width;

  &:hover { filter: brightness(1.25); }
  &:focus-visible { outline: 2px dashed currentColor; outline-offset: 2px; }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`;

export const Label = styled.span`
  display: inline-block;
  white-space: nowrap;
  font-family: var(--font-work), system-ui, sans-serif;
  font-synthesis: none;
  font-weight: ${TYPOGRAPHY.fw.extraBold};
  text-transform: uppercase;
  letter-spacing: 0.6em;
  padding: 4px 10px;

  &.geek  {
    opacity: 1;
    position: static;
    transition: opacity 0.22s cubic-bezier(.4,0,.2,1) 0.06s;
  }
  &.human {
    opacity: 0;
    position: absolute;
    left: 0; top: 0;
    pointer-events: none;
    transition: opacity 0.22s cubic-bezier(.4,0,.2,1) 0s;
  }
  ${MenuItem}:hover &.geek  { opacity: 0; transition-delay: 0s; }
  ${MenuItem}:hover &.human { opacity: 1; transition-delay: 0.06s; pointer-events: auto; }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
      &.geek, &.human { transition: none; }
 }
`;


