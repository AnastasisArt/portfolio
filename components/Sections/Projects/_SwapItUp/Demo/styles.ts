import styled, { keyframes } from 'styled-components';
import { COLORS, BP } from '@/constants';
import swapitup from '@/public/images/swapitup.png';

const pulse = keyframes`
  0% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 0 rgba(255,255,255,0); }
  50% { transform: translate(-50%, -50%) scale(1.1); box-shadow: 0 0 20px rgba(255,255,255,0.5); }
  100% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 0 rgba(255,255,255,0); }
`;

export const MockupContainer = styled.div<{ $isPlaying: boolean }>`
  position: relative;
  width: 100%;
  aspect-ratio: 9 / 19.5;
  border-radius: 24px;
  overflow: hidden;
  background-color: #000;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: transform 0.3s ease;
  z-index: 1;
  max-width: 180px;

  &:hover {
    transform: scale(1.01);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.5);
    opacity: ${({ $isPlaying }) => ($isPlaying ? 0 : 1)};
    transition: opacity 1s ease;
    z-index: 3;
  }

  &:hover button {
    transform: translate(-50%, -50%) scale(1.08);
    background: rgba(255, 255, 255, 1);
  }

  @media (min-width: ${BP.sm}) {
    max-width: 160px;
  }
  @media (min-width: ${BP.lg}) {
    max-width: 220px;
  }
`;

export const ImageLayer = styled.div<{ $isPlaying: boolean }>`
  position: absolute;
  inset: 0;
  background-image: url(${swapitup.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 24px;
  opacity: ${({ $isPlaying }) => ($isPlaying ? 0 : 1)};
  transition: opacity 1s ease;
  z-index: 1;
`;

export const Video = styled.video<{ $isPlaying: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 20px;
  opacity: ${({ $isPlaying }) => ($isPlaying ? 1 : 0)};
  transition: opacity 1s ease;
  z-index: 2;
`;

export const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: 0.10em solid #fff;
  background: ${COLORS.tertiary};
  color: #fff;
  font-size: 1.8em;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
  pointer-events: none;

  transition:
    background 0.45s ease-in-out,
    color 0.45s ease-in-out,
    border-color 0.45s ease-in-out,
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  animation: ${pulse} 2.2s ease-in-out infinite;

  svg {
    transform: translateX(7%);
  }

  ${MockupContainer}:hover & {
    transform: translate(-50%, -50%) scale(1.08);
    background: #fff;
    border: 0.05em solid ${COLORS.tertiary};
    color: ${COLORS.tertiary};
  }
`;

export const PauseOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background: #fff;
  border: 0.10em solid ${COLORS.tertiary};
  color: ${COLORS.tertiary};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
  opacity: 1;
  transition:
    opacity 0.4s ease-in-out,
    transform 0.4s ease-in-out,
    background 0.4s ease-in-out,
    color 0.4s ease-in-out,
    border-color 0.4s ease-in-out;
  animation: ${pulse} 2.2s ease-in-out infinite;
`;