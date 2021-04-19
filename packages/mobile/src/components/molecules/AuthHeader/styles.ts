import Constants from 'expo-constants';

import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    position: absolute;
    left: 12px;
    right: 32px;
    top: 0;

    z-index: 5;
    height: ${48 + Constants.statusBarHeight}px;
    width: 100%;
    background: ${theme.colors.gray['50']};

    justify-content: flex-end;
  `}
`;
