import styled, { css } from 'styled-components/native';

export const Box = styled.View`
  ${() => css`
    margin-top: 24px;

    flex-direction: row;
    justify-content: space-between;
  `}
`;
