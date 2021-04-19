import Constants from 'expo-constants';

import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    position: absolute;
    left: 12px;
    top: 0;

    height: ${Constants.statusBarHeight * 2}px;
    width: 100%;
    z-index: 5;
    background: ${theme.colors.gray['50']};

    justify-content: flex-end;
  `}
`;

export const Content = styled.View`
  ${() => css`
    padding-right: 32px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`;
