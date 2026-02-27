import styled from 'styled-components';
import { BP } from '@/constants';

export const HeaderBar = styled.header`
  position: relative;
  width: 100%;
  z-index: 10;
  background: transparent;
  overflow: visible;
  isolation: isolate;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0;
  flex-wrap: nowrap;
  width: 100%;
  padding: 0 12px;
  overflow: visible;
  
  @media (max-width: ${BP.lg}){
    justify-content: center;
    padding: 0;
  }
`;

export const Left = styled.div`
  flex: 1 1 auto;
  min-width: 0;
  > nav {
    max-width: 100%;
  }
  
  @media (max-width: ${BP.lg}) {
    display: none;
  }
`;

export const Right = styled.nav`
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: nowrap;
  gap: 0;
  position: relative;
  overflow: visible;
  transform: translateY(-1px);
  
  @media (max-width: ${BP.lg}) {
    justify-content: center;
  }
`;