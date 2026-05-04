import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '@/constants';
import { turret } from '@/lib/fonts';

export const AccordionRoot = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  background: ${COLORS.bg};
  border-top: 1px solid ${COLORS.lightblue};
  border-top-style: dashed;
  white-space: pre-line;
  padding-top: ${({ $isOpen }) => ($isOpen ? '0.45rem' : '0')};
  padding-bottom: ${({ $isOpen }) => ($isOpen ? '0.9rem' : '0')};
  transition: padding-block 0.28s ease;
`;

export const AccordionHeader = styled.h2`
  width: 100%;
`;

export const AccordionButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem 0;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${COLORS.primary};
  text-align: left;
  transition: opacity 0.2s ease;

  svg {
    flex-shrink: 0;
    color: ${COLORS.lightblue};
  }
`;

export const AccordionTitle = styled.span`
  font-family: ${turret.style.fontFamily};
  font-size: ${TYPOGRAPHY.fs.md};
  color: ${COLORS.bluesky};
`;

export const AccordionContent = styled.div<{ $isOpen: boolean }>`
  display: grid;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? '1fr' : '0fr')};
  transition: grid-template-rows 0.32s ease;
`;

export const AccordionContentInner = styled.div`
  overflow: hidden;
  min-height: 0;
  p {
    margin: 0;
    padding: 0;
  }
`;