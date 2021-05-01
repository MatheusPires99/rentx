import styled, { css } from 'styled-components/native';

import { DividerProps } from '.';

export const Container = styled.View<DividerProps>`
  ${({ theme, marginVertical, color }) => css`
    height: 1px;
    width: 100%;
    background: ${color || theme.colors['gray.100']};
    margin-top: ${marginVertical}px;
    margin-bottom: ${marginVertical}px;
  `}
`;
