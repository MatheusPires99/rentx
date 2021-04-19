import styled, { css } from 'styled-components/native';

export const StepTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.archivo.semiBold};
    font-size: 20px;
    color: ${theme.colors.gray['600']};
    margin-bottom: 24px;
  `}
`;
