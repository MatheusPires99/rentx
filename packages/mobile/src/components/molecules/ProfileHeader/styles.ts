import styled, { css } from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  ${() => css`
    width: 48px;
    height: 48px;

    justify-content: center;
    align-items: center;
  `}
`;
