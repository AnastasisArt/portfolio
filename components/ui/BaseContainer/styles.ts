import styled from "styled-components";
import { BP } from "@/constants";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 92vw;

  @media (min-width: ${BP.md}) {
    max-width: 85vw;
  }

  @media (min-width: ${BP.lg}) {
    max-width: 80vw;
  }

  @media (min-width: ${BP["2xl"]}) {
    max-width: 1320px;
  }

  @media (min-width: ${BP["3xl"]}) {
    max-width: 1600px;
  }
`;
