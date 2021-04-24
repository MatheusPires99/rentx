import styled, { css } from 'styled-components/native';

import { IPHONE_8_HEIGHT } from '../../../../constants';

type TitleProps = {
  color: string;
};

export const Container = styled.View`
  ${() => css`
    margin-top: 36px;

    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const RowLeft = styled.View`
  ${() => css``}
`;

export const RowRight = styled.View`
  ${() => css``}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.archivo.medium};
    font-size: 10px;
    color: ${theme.colors.gray['300']};
    margin-bottom: 4px;
    text-transform: uppercase;
  `}
`;

export const Title = styled.Text<TitleProps>`
  ${({ theme, color }) => css`
    font-family: ${theme.fonts.archivo.medium};
    font-size: ${IPHONE_8_HEIGHT ? 24 : 20}px;
    color: ${color};
  `}
`;
