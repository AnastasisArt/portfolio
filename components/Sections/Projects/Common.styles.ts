import styled from "styled-components";
import { COLORS, TYPOGRAPHY, BP, BP_PX } from "@/constants";
import { workSans } from '@/lib/fonts';

type Align = "left" | "center" | "right";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 0;
  width: 100%;
  max-width: 92vw;
  min-height: auto;
  margin: 0 auto;

  @media (min-width: ${BP.md}) {
    max-width: 85vw;
  }

  @media (min-width: ${BP.lg}) {
    max-width: 80vw;
  }
  
  @media (min-width: ${BP.xl}) {
    max-width: 90vw;
    flex-direction: row;
    justify-content: space-between;
    gap: 32px;
    height: 100vh;
    padding-bottom: 0;
  }

  @media (min-width: ${BP["2xl"]}) {
    max-width: 1320px;
    gap: 48px;
    
    &.layout-portrait {
      max-width: 1180px;
    }
  }

  @media (min-width: ${BP["3xl"]}) {
    max-width: 1600px;
    gap: 64px;

    &.layout-portrait {
      max-width: 1320px;
    }
  }
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
  
  @media (min-width: ${BP.lg}px) and (max-width: ${BP_PX.xl - 1}px) {
    img {
      max-width: 85%;
    }
  }
`;

export const Right = styled.div`
  flex: 1.1;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 0;
  
  &.layout-portrait {
    flex: 2.2;
  }

  @media (min-width: ${BP.lg}) {
    justify-content: start;
  }
`;

export const Title = styled.h1<{ $align?: Align }>`
  color: ${COLORS.secondary};
  text-transform: uppercase;
  margin-bottom: 1.2rem;
  width: 100%;
  text-align: center;
  font-size: ${TYPOGRAPHY.fs.xxl};

  @media (min-width: ${BP.xl}) {
    width: 100%;
    text-align: ${({ $align }) => $align ?? "left"};
  }
  
  &.no-margin {
      margin-bottom: 0;
  }
  &.margin-top {
    margin-top: 2rem;
  }
  
  /* --- TITLE LINK --- */
  .titleLink {
    display: inline-block;
    transition: color 180ms ease, transform 180ms ease;
    font-weight: bold;
  }
  .titleLink:hover {
    color: ${COLORS.bluesky};
  }
  /* keyboard */
  .titleLink:focus-visible {
    outline: 2px solid ${COLORS.bluesky};
    outline-offset: 3px;
    border-radius: 0.3rem;
  }
  @media (prefers-reduced-motion: reduce) {
    .titleLink {
      transition: color 0ms ease, transform 0ms ease;
    }
    .titleLink:hover {
      transform: none;
    }
  }
`;

export const Status = styled.span`
  font-size: ${TYPOGRAPHY.fs.lg};
  font-weight: ${TYPOGRAPHY.fw.light};
  text-transform: none;
  color: ${COLORS.tertiary};

  @media (min-width: ${BP.lg}) {
    font-size: ${TYPOGRAPHY.fs.xxl};
  }
`;

export const Subtitle = styled.p<{ $align?: Align }>`
  text-transform: uppercase;
  font-family: ${workSans.style.fontFamily};
  font-weight: ${TYPOGRAPHY.fw.semiBold};
  font-size: ${TYPOGRAPHY.fs.md};
  margin-bottom: 1.2rem;
  width: 100%;
  text-align: center;
  
  @media (min-width: ${BP.xl}) {
    text-align: ${({ $align }) => $align ?? "left"};
  }
`;

export const RoleLabel = styled.span`
  color: ${COLORS.bluesky};
  text-transform: uppercase;
  font-family: ${workSans.style.fontFamily};
  font-weight: ${TYPOGRAPHY.fw.regular}; 
`;

export const Text = styled.p<{ $align?: Align }>`
  font-family: ${workSans.style.fontFamily};
  font-size: ${TYPOGRAPHY.fs.md};
  font-weight: ${TYPOGRAPHY.fw.regular};
  padding-bottom: 0.6rem;
  white-space: pre-line;

  @media (min-width: ${BP.lg}) {
    text-align: ${({ $align }) => $align ?? "left"};
  }
`;

export const ViewDetailsLink = styled.a`
  color: ${COLORS.tertiary};
  font-size: ${TYPOGRAPHY.fs.sm};
  text-transform: uppercase;
  text-align: center;
  align-self: center;
  margin-top: 1rem;

  &:hover {
    color: ${COLORS.secondary};
  }
`;

export const StackGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2px;
  flex-wrap: wrap;
  width: 100%;
  margin: 0;
  margin-top: 1rem;
`;

//---------- DETAILS
export const DetailContent = styled.div`
  width: 100%;
  max-width: 70%;
  margin: 0 auto;
  padding-top: 3rem;
`;

export const DetailImage = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 2rem auto;
  
  &.large {
    max-width: 80%;
  }
  &.medium {
    max-width: 70%;
  }
  &.small {
    max-width: 60%;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;