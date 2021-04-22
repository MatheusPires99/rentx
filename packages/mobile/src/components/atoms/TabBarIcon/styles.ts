import styled, { css } from 'styled-components/native';

type IconProps = {
  focused: boolean;
};

type SquareProps = {
  focused: boolean;
};

export const Container = styled.View`
  ${() => css`
    align-items: center;
  `}
`;

export const Icon = styled.View<IconProps>`
  ${({ focused }) => css`
    margin-bottom: ${focused ? 8 : 10}px;
  `}
`;

export const Square = styled.View<SquareProps>`
  ${({ theme, focused }) => css`
    width: 4px;
    height: 2px;

    background: ${focused ? theme.colors.primary : theme.colors.gray['300']};
  `}
`;
