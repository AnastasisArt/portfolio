import styled, { css } from 'styled-components';
import { COLORS, TYPOGRAPHY, BP } from '@/constants';
import { workSans } from '@/lib/fonts';

export const Container = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 6px;
  padding: 0.2rem 0.3rem;
  margin: 0.16rem;
  border: 1px solid ${COLORS.lightblue};
  color: ${COLORS.primary};

  @media (min-width: ${BP.lg}) {
    margin: 0.24rem;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16px;
  width: auto;
  
  img, svg {
    height: 100%;
    width: auto;
    object-fit: contain;
    display: block;
  }

  @media (min-width: ${BP.lg}) {
    height: 24px;
  }
`;

export const Label = styled.span`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: start;
  flex-wrap: nowrap;
  gap: 0;
  font-family: ${workSans.style.fontFamily};
  font-weight: ${TYPOGRAPHY.fw.regular};
  text-transform: uppercase;
`;

export const Part = styled.span<{ $accent?: boolean }>`
  ${({ $accent }) => 
    $accent ? css`
      font-size: ${TYPOGRAPHY.fs.md};
      font-weight: ${TYPOGRAPHY.fw.regular};
    `
    : css`
      font-size: ${TYPOGRAPHY.fs.sm};
    `
  }
`;