import styled, {keyframes} from 'styled-components';
import { COLORS, TYPOGRAPHY, BP } from "@/constants";
import { workSans } from '@/lib/fonts';

const dotsAnim = keyframes`
  0% { content: ''; }
  25% { content: '.'; }
  50% { content: '..'; }
  75% { content: '...'; }
  100% { content: ''; }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 0;
  width: 100%;

  @media (min-width: ${BP.lg}) {
    align-items: start;
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: ${TYPOGRAPHY.fs.xxl};
  line-height: 1.1;
  margin: 0;
  
  span.ana {
    color: ${COLORS.secondary};
  }
  .dots::after {
    display: inline-block;
    white-space: pre;
    animation: ${dotsAnim} 2.8s steps(4, end) infinite;
    content: '';
    letter-spacing: 0.1rem;
  }
`;

export const Subtitle = styled.p`
  text-transform: uppercase;
  padding: 0;
  margin: 0;
  font-weight: ${TYPOGRAPHY.fw.semiBold};
  font-family: ${workSans.style.fontFamily};
  font-size: ${TYPOGRAPHY.fs.md};
  color: ${COLORS.tertiary};
  margin-bottom: 0.6rem;
  line-height: 1;

  @media (min-width: ${BP.sm}) {
    margin-bottom: 1.2rem;
    font-size: ${TYPOGRAPHY.fs.sm};
  }
`;

export const Text = styled.p`
  width: 100%;
  margin: 0;
  font-size: ${TYPOGRAPHY.fs.md};
  padding-block: 0.6rem;
  text-align: left;
`;