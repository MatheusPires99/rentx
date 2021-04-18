import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  ${() => css`
    width: 48px;
    height: 48px;

    align-items: center;
    justify-content: center;
  `}
`;
