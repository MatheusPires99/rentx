import styled, { css } from 'styled-components/native';

import { Theme } from '../../../@types/styled';

type ContainerProps = {
  fontFamily?: keyof Theme['fontsFamily'];
  fontSize?: keyof Theme['fontSizes'];
  color?: keyof Theme['colors'];
};

export const Container = styled.Text<ContainerProps>`
  ${({ theme, fontFamily, fontSize, color }) => css`
    font-family: ${fontFamily
      ? theme.fontsFamily[fontFamily]
      : theme.fontsFamily['inter.regular']};
    font-size: ${fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.md};
    color: ${color ? theme.colors[color] : theme.colors['gray.600']};
  `}
`;
