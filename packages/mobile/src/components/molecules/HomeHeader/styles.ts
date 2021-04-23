import styled, { css } from 'styled-components/native';

export const TotalCars = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.inter.regular};
    font-size: 15px;
    color: ${theme.colors.gray['400']};
  `}
`;
