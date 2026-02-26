import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '@/constants';

export const SwitchWrap = styled.nav`
  gap: 10px;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 1.4rem 0rem 0rem;
`;

export const LangButton = styled.button`
  cursor: pointer;
  user-select: none;
  background: transparent;
  border: 0;
  padding: 4px 8px;
  font-family: var(--font-work), system-ui, sans-serif;
  font-weight: ${TYPOGRAPHY.fw.extraBold};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: filter 0.15s ease, transform 0.15s ease;
  color: ${COLORS.secondary};

  &[data-active] {
    color: ${COLORS.primary};
    filter: brightness(1.05);
    cursor: default;
  }
  &:not([data-active]):hover {
    filter: brightness(1.25);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px dashed currentColor;
    outline-offset: 2px;
  }
`;

export const Sep = styled.span`
  user-select: none;
  font-family: var(--font-work), system-ui, sans-serif;
  font-weight: ${TYPOGRAPHY.fw.extraBold};
  color: currentColor;
  opacity: 0.9;
`;