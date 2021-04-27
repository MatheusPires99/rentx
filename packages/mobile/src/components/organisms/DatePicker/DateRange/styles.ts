import styled, { css } from 'styled-components/native';

type DateWrapProps = {
  hasDate: boolean;
};

export const Container = styled.View`
  ${() => css`
    margin-top: 32px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Content = styled.View`
  ${() => css`
    flex: 1;
  `}
`;

export const SubText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.archivo.medium};
    font-size: 10px;
    color: ${theme.colors.gray['400']};
    margin-bottom: 8px;
  `}
`;

export const DateWrap = styled.View<DateWrapProps>`
  ${({ theme, hasDate }) => css`
    ${!hasDate &&
    css`
      border-bottom-width: 1px;
      border-style: solid;
      border-color: ${theme.colors.gray['400']};
    `}
  `}
`;

export const Date = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.inter.medium};
    font-size: 15px;
    color: ${theme.colors.white};
  `}
`;
