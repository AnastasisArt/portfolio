import styled from 'styled-components';
import { TYPOGRAPHY, COLORS } from '@/constants';

export const Role = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const RoleContent = styled.span`
  color: ${COLORS.primary};
  font-weight: ${TYPOGRAPHY.fw.light};
`;