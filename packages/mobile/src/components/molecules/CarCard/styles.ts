import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { IPHONE_8_HEIGHT } from '../../../constants';

export const Container = styled(RectButton)`
  ${({ theme }) => css`
    width: 100%;
    padding: 24px;
    background: ${theme.colors.white};
    margin-bottom: 16px;

    border-bottom-width: 1px;
    border-style: solid;
    border-color: ${theme.colors['gray.100']};

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Content = styled.View`
  ${() => css``}
`;

export const Box = styled.View`
  ${() => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const ValuePerDayContainer = styled.View`
  ${() => css`
    margin-right: ${IPHONE_8_HEIGHT ? 18 : 12}px;
  `}
`;

export const Image = styled.Image`
  ${() => css`
    width: 160px;
    height: 92px;
  `}
`;
