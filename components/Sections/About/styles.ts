import styled from 'styled-components';
import { BP } from "@/constants";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  width: 100%;
  max-width: 100%;
  min-height: 80vh;
  margin: 0 auto;
  padding:
    clamp(48px, 43.43px + 1.43vw, 64px)
    0
    clamp(64px, 59.43px + 1.43vw, 80px)
    0;

  @media (min-width: ${BP.lg}) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 1320px;
    padding: 0;
  }
`;

export const LeftSection = styled.div`
  flex: 1.4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  min-width: 0;
  width: 100%;
  text-align: left;
  padding: 0;
  padding-top: 1rem;
  box-sizing: border-box;

  @media (min-width: ${BP.lg}) {
    align-items: flex-start;
    justify-content: center;
    padding: 0;
  }
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  width: 70%;
  
  @media (min-width: ${BP.xl}) {
    justify-content: flex-end;
  }
`;

export const Photo = styled.img`
  max-width: 300px;
  width: 100%;
  height: auto;
  object-fit: contain;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: ${BP.lg}) {
    max-width: 300px;
    width: 80%;
  }
  @media (min-width: ${BP.xl}) {
    width: 70%;
    max-width: 70%;
  }
`;