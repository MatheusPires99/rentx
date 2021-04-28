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
