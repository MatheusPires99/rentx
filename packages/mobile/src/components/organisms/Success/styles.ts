import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    background: ${theme.colors.black};

    flex: 1;
    align-items: center;
    justify-content: center;
  `}
`;

export const DoneIconContainer = styled.View`
  ${() => css`
    margin: 24px 0 40px;
  `}
`;

export const Description = styled.View`
  ${() => css`
    margin: 16px 0 80px;
    width: 220px;
  `}
`;
