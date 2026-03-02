import styled from 'styled-components';
import {BP, COLORS, TYPOGRAPHY} from '@/constants';

export const FooterWrap = styled.div`
  margin: 12px auto;
  width: 100vw;
  overflow-x: hidden;
  word-wrap: break-word;
  overflow-wrap: break-word;
  box-sizing: border-box;
  > * {
    max-width: 100%;
    box-sizing: border-box;
  }

  @media (min-width: ${BP.lg}){
    max-width: min(100%);
  }
`;

export const Wrap = styled.footer`
  color: ${COLORS.grey};
  font-family: var(--font-turret), system-ui, sans-serif;
  font-weight: ${TYPOGRAPHY.fw.regular};
  font-size: ${TYPOGRAPHY.fs.xs};
  margin-top: 4rem;
  p {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }
`;

export const Rule = styled.hr`
  border: 0;
  height: 1px;
  background: ${COLORS.grey};
  opacity: 0.35;
`;

export const Line = styled.p`
  margin: 4px 0 0 14px;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap:0;
  margin: 4px 8px 0 14px;
  padding-bottom: 8px;
`;

export const Version = styled.span`
  opacity: 0.9;
`;