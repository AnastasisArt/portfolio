import styled, { keyframes } from 'styled-components';

const rotateOpen = keyframes`
  0%   { transform: rotate(0deg)   translateZ(0.1px); }
  70%  { transform: rotate(48deg)  translateZ(0.1px); }
  100% { transform: rotate(45deg)  translateZ(0.1px); }
`;
const rotateClose = keyframes`
  0%   { transform: rotate(45deg)  translateZ(0.1px); }
  30%  { transform: rotate(-4deg)  translateZ(0.1px); }
  100% { transform: rotate(0deg)   translateZ(0.1px); }
`;

export const IconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  perspective: 800px;
  padding-top: 6px;
`;

export const IconButton = styled.button`
  padding: 0;
  border: 0;
  margin: 0;
  background: transparent;
  cursor: pointer;
  display: inline-flex;
`;

export const IconWrapper = styled.div<{ open: boolean }>`
  width: 24px;
  height: 24px;
  position: relative;
  overflow: visible;
  background-color: transparent;
  transform: rotate(0deg) translateZ(0.1px);
  transform-origin: 50% 50%;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  will-change: transform;
  contain: paint;
  
  animation-name: ${({ open })=> (open? rotateOpen : rotateClose)};
  animation-duration: ${({ open })=> (open? '0.8s' : '0.75s')};
  animation-timing-function: cubic-bezier(.22,.61,.36,1);
  animation-fill-mode: both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transform: ${({ open })=> (open? 'rotate(45deg)' : 'rotate(0deg)')};
  }
`;

export const Tile = styled.div<{ $index: number }>`
  position: absolute;
  width: 10px;
  height: 10px;
  ${({ $index })=> $index === 0 && `top:0;left:0;border-radius:3px 5px 0 5px;`}
  ${({ $index })=> $index === 1 && `top:0;right:0;border-radius:5px 0 5px 0;`}
  ${({ $index })=> $index === 2 && `bottom:0;left:0;border-radius:5px 0 5px 0;`}
  ${({ $index })=> $index === 3 && `bottom:0;right:0;border-radius:0 5px 0 5px;`}

  background: ${({ $index }) =>
  $index === 0? `linear-gradient(135deg, #9adcf2 0%, #fdf8f2 90%)`
    : $index === 1? `linear-gradient(135deg, #f7b6d0 0%, #fdf8f2 90%)`
      : $index === 2? `linear-gradient(135deg, #f9e08e 0%, #fdf8f2 90%)`
        : `linear-gradient(135deg, #c3a3ee 0%, #fdf8f2 90%)`};

  box-shadow:
    inset -1px -1px 3px rgba(255,255,255,0.7),
    inset 2px 2px 4px rgba(0,0,0,0.15),
    0 1px 2px rgba(0,0,0,0.1);
`;