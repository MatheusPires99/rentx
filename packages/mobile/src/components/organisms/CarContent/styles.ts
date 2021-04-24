import styled, { css } from 'styled-components/native';

import { TAB_BAR_HEIGHT } from '../../../constants';

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: TAB_BAR_HEIGHT,
  },
})`
  ${() => css`
    padding: 16px;

    flex: 1;
  `}
`;

export const Image = styled.Image`
  ${() => css`
    width: 280px;
    height: 132px;

    align-self: center;
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.inter.regular};
    font-size: 15px;
    color: ${theme.colors.gray['400']};
    line-height: 25px;
    width: 95%;
    margin-top: 24px;
  `}
`;
