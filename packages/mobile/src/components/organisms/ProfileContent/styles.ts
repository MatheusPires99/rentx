import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${() => css`
    z-index: 10;
    margin-top: -100px;

    flex: 1;
    align-items: center;
  `}
`;
