import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${() => css`
    flex: 1;
  `}
`;

export const Content = styled.ScrollView`
  ${() => css`
    padding: 16px;

    flex: 1;
  `}
`;

export const Image = styled.Image`
  ${() => css`
    width: 280px;
    height: 132px;

    align-self: center;
  `}
`;
