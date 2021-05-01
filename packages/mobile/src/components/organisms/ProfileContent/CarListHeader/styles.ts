import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${() => css`
    margin-bottom: 16px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;
