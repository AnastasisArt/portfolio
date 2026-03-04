import styled from 'styled-components';
import { BP } from '@/constants';

export const HeaderBar = styled.header`
  position: relative;
  width: 100%;
  z-index: 10;
  background: transparent;
  overflow: visible;
  isolation: isolate;
  padding-block: 4px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  gap: 0;
  flex-wrap: nowrap;
  width: 100%;
  overflow: visible;
  
  @media (min-width: ${BP.lg}){
    padding: 0 12px;
    justify-content: space-between;
  }
`;

export const Left = styled.div`
  display: none;
  @media (min-width: ${BP.lg}) {
    display: block;
    flex: 1 1 auto;
    min-width: 0;
    > nav {
      max-width: 100%;
    }
  }
`;

export const Right = styled.nav`
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 0;
  position: relative;
  overflow: visible;
  transform: translateY(-1px);
  
  @media (min-width: ${BP.lg}) {
    justify-content: flex-end;
  }
`;