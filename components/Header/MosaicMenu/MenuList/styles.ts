import styled from 'styled-components';
import Link from 'next/link';
import { COLORS, TYPOGRAPHY, BP } from '@/constants';

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 0;
  flex-wrap: nowrap;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: ${COLORS.primary};
  border: 1px solid ${COLORS.secondary};
  border-radius: calc(24px - 2px);
`;

export const MenuItem = styled(Link)`
  cursor: pointer;
  user-select: none;
  width: 100%;
  text-decoration: none;
  color: ${COLORS.bg};
  font-family: var(--font-work), system-ui, sans-serif;
  font-weight: ${TYPOGRAPHY.fw.bold};
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: ${TYPOGRAPHY.fs.xs};
  padding: 10px 12px;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  &.first {
    padding: 16px 12px 10px 12px;
  }
  &.last {
    padding: 10px 12px 16px 12px;
  }

  &:hover {
    color: ${COLORS.bluesky};
  }

  @media (max-width: ${BP.md}) {
    font-size: ${TYPOGRAPHY.fs.sm};
  }
`;

export const ItemWrap = styled.li`
  margin: 8px 0;
  width: 100%;
`;

export const Label = styled.span`
  display: inline-block;
`;