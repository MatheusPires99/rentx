import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${() => css`
    margin-top: 40px;
  `}
`;

export const DatesContainer = styled.View`
  ${({ theme }) => css`
    border-bottom-width: 1px;
    border-style: solid;
    border-color: ${theme.colors.gray['100']};

    padding-bottom: 16px;
    margin-bottom: 16px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const CalendarIcon = styled.View`
  ${({ theme }) => css`
    width: 48px;
    height: 48px;
    background: ${theme.colors.primary};

    align-items: center;
    justify-content: center;
  `}
`;

export const DateRange = styled.View`
  ${() => css`
    flex-direction: row;
    align-items: center;
  `}
`;

export const SubText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.archivo.medium};
    font-size: 10px;
    color: ${theme.colors.gray['300']};
    margin-bottom: 8px;
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.inter.medium};
    font-size: 15px;
    color: ${theme.colors.gray['600']};
  `}
`;

export const Summary = styled.View`
  ${() => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Total = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.archivo.medium};
    font-size: 24px;
    color: ${theme.colors.green};
  `}
`;
