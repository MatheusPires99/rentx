import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${() => css`
    margin-bottom: 24px;
  `}
`;

export const Image = styled.Image`
  ${() => css`
    width: 180px;
    height: 180px;
    border-radius: 90px;
  `}
`;
