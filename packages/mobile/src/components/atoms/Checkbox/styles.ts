import styled, { css } from 'styled-components/native';

type BoxProps = {
  isChecked: boolean;
};

export const Container = styled.View`
  ${() => css`
    flex-direction: row;
    align-items: center;
  `}
`;

export const Box = styled.View<BoxProps>`
  ${({ theme, isChecked }) => css`
    width: 20px;
    height: 20px;
    background: ${isChecked ? theme.colors.black : theme.colors.gray['100']};
    margin-right: 12px;

    align-items: center;
    justify-content: center;
  `}
`;

export const CheckedBox = styled.View`
  ${({ theme }) => css`
    width: 8px;
    height: 8px;
    background: ${theme.colors.white};
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.inter.regular};
    font-size: 13px;
    color: ${theme.colors.gray['400']};
  `}
`;
