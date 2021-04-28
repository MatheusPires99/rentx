import styled, { css } from 'styled-components/native';

type DateWrapProps = {
  hasDate: boolean;
};

export const Container = styled.View`
  ${() => css`
    margin-top: 32px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Content = styled.View`
  ${() => css`
    flex: 1;
  `}
`;

export const DateWrap = styled.View<DateWrapProps>`
  ${({ theme, hasDate }) => css`
    ${!hasDate &&
    css`
      border-bottom-width: 1px;
      border-style: solid;
      border-color: ${theme.colors['gray.400']};
    `}
  `}
`;
