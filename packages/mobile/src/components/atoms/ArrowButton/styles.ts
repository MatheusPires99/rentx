import styled, { css } from 'styled-components/native';

type ContainerProps = {
  buttonSize?: number | undefined;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  ${({ buttonSize }) => css`
    width: ${buttonSize || 48}px;
    height: ${buttonSize || 48}px;

    align-items: center;
    justify-content: center;
  `}
`;
