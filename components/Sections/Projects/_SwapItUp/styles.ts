import styled from 'styled-components';
import Image from 'next/image';
import { BP } from '@/constants';

export const Left = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: clamp(1.5rem, 6vh, 4rem);
  width: 100%;
  margin-left: 0;

  .background-layer {
    position: absolute;
    inset: 0;
    max-width: 160px;
    margin: 0 auto;
    pointer-events: none;
    z-index: 0;
    
    @media (min-width: ${BP.lg}) {
      max-width: 220px;
    }
    @media (min-width: ${BP.sm}) {
      max-width: 180px;
    }
  }
  @media (min-width: ${BP.xl}) {
    margin-left: 3rem;
  }
`;

export const OverlayImage = styled(Image)<{
  top?: string;
  bottom?: string;
  left: string;
  width: string;
  height?: string;
  rotate?: number;
}>`
  position: absolute;
  top: ${({ top }) => top ?? 'auto'};
  bottom: ${({ bottom }) => bottom ?? 'auto'};
  left: ${({ left }) => left};
  width: ${({ width }) => width};
  height: ${({ height }) => height ?? 'auto'};
  transform: ${({ rotate }) =>
rotate ? `translateX(-50%) rotate(${rotate}deg)` : 'translateX(-50%)'};
  z-index: 0;
`;