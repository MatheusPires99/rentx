import styled, { css } from 'styled-components/native';

type ContainerProps = {
  isHiding: boolean;
};

export const Container = styled.View<ContainerProps>`
  ${({ isHiding }) => css`
    ${isHiding &&
    css`
      height: 0;
      opacity: 0;
    `}
  `}
`;

export const StepTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.archivo.semiBold};
    font-size: 20px;
    color: ${theme.colors.gray['600']};
    margin-bottom: 24px;
  `}
`;
