'use client';
import styled from 'styled-components';
import { COLORS } from '@/constants';

export const Hero = styled.section`
  margin-bottom: 24px;
  @media (max-width: 960px) {
    margin-bottom: 6px;
  }
`;

export const ContactFooterWrapper = styled.section`
  width: 100%;
  background: linear-gradient(
    to bottom,
    ${COLORS.bg} 12%,
    ${COLORS.secondary} 100%
  );
`;