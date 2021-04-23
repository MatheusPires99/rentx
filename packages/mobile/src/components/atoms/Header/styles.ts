import Constants from 'expo-constants';

import styled, { css } from 'styled-components/native';

type ContainerProps = {
  variant: 'light' | 'dark';
  height: number;
};

export const Container = styled.View<ContainerProps>`
  ${({ theme, variant, height }) => css`
    padding-top: ${Constants.statusBarHeight}px;
    height: ${height + Constants.statusBarHeight}px;
    width: 100%;
    z-index: 5;

    ${variant === 'light' &&
    css`
      background: ${theme.colors.gray['50']};
    `}

    ${variant === 'dark' &&
    css`
      background: ${theme.colors.black};
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
