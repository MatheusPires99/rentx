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
