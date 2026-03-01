import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '@/constants';

export const SwitchWrap = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding: 1rem 1.4rem 0rem 0rem;
`;

export const LangButton = styled.button`
  cursor: pointer;
  user-select: none;
  background: transparent;
  border: 0;
  padding: 4px 8px;
  font-family: var(--font-work), system-ui, sans-serif;
  font-weight: ${TYPOGRAPHY.fw.bold};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: filter 0.15s ease, transform 0.15s ease;
  color: ${COLORS.white};

  &[data-active] {
    color: ${COLORS.bluesky};
    filter: brightness(1.30);
    cursor: default;
  }
  &:not([data-active]):hover {
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 1px dashed currentColor;
    outline-offset: 1px;
  }
`;

export const Sep = styled.span`
  user-select: none;
  font-family: var(--font-work), system-ui, sans-serif;
  font-weight: ${TYPOGRAPHY.fw.extraBold};
  color: currentColor;
  opacity: 0.9;
`;