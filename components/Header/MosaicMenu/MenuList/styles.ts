import styled from 'styled-components';
import Link from 'next/link';
import { COLORS, TYPOGRAPHY, BP } from '@/constants';

export const MenuList = styled.ul`
    ${MIXINS.flexCol(0, ALIGN.start, JUSTIFY.start)};
    list-style: ${UNIT.none};
    margin: 0;
    padding: 0;
    width: ${PCT.pct100};
    background-color: ${COLORS.primary};
    border: 1px solid ${COLORS.secondary};
    border-radius: calc(24px - 2px);
`;

export const MenuItem = styled(Link)`
    ${MIXINS.clickable};
    width: ${PCT.pct100};
    text-decoration: ${UNIT.none};
    color: ${COLORS.bgDev};
    font-family: ${FONTS.fptCyr}, ${FONTS.workSans}, system-ui, sans-serif;
    font-weight: ${TYPOGRAPHY.fontWeight.bold};
    text-transform: ${TEXT_TRANSFORM.uppercase};
    letter-spacing: ${EM.em0_8};
    font-size: ${TYPOGRAPHY.fontSize.xs};
    padding: 10px 12px;
    -webkit-tap-highlight-color: ${COLORS.transparent};
    display: ${DISPLAY.flex};
    justify-content: ${JUSTIFY.center};
    align-items: ${ALIGN.center};
    
    &.first {
        padding: 16px 12px 10px 12px;
    }
    &.last {
        padding: 10px 12px 16px 12px;
    }
    
    &:hover {
        color: ${COLORS.bluesky};
    }
    
    ${mq.down(BP.sm)} {
        font-size: ${TYPOGRAPHY.fontSize.sm};
    }
`;

export const ItemWrap = styled.li`
    margin: ${PX.px8} 0;
    width: ${PCT.pct100};
`;

export const Label = styled.span`
    display: ${DISPLAY.inlineBlock};
    .accent {
        font-family: ${FONTS.workSans}, system-ui, sans-serif;
        font-weight: ${TYPOGRAPHY.fontWeight.extraBold};
    }
`;