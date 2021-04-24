import Constants from 'expo-constants';

import styled, { css } from 'styled-components/native';

type ContainerProps = {
  themeColor: 'light' | 'dark';
  height: number;
  backgroundColor?: string | null;
};

export const Container = styled.View<ContainerProps>`
  ${({ theme, themeColor, height, backgroundColor }) => css`
    padding-top: ${Constants.statusBarHeight}px;
    height: ${height + Constants.statusBarHeight}px;
    width: 100%;
    z-index: 5;

    ${themeColor === 'light' &&
    css`
      background: ${theme.colors.gray['50']};
    `}

    ${themeColor === 'dark' &&
    css`
      background: ${theme.colors.black};
    `}

    ${backgroundColor &&
    css`
      background: ${backgroundColor};
    `}

    justify-content: center;
  `}
`;

export const Content = styled.View`
  ${() => css`
    padding: 0 24px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`;
