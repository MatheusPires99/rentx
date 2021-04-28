import React, { ReactNode } from 'react';
import { TextProps as RNTextProps } from 'react-native';

import { Theme } from '../../../@types/styled';
import * as S from './styles';

type TextProps = RNTextProps & {
  fontFamily?: keyof Theme['fontsFamily'];
  fontSize?: keyof Theme['fontSizes'];
  color?: keyof Theme['colors'];
  children: ReactNode;
};

export const Text = ({
  fontFamily,
  fontSize,
  color,
  children,
  ...rest
}: TextProps) => {
  return (
    <S.Container
      fontFamily={fontFamily}
      fontSize={fontSize}
      color={color}
      {...rest}
    >
      {children}
    </S.Container>
  );
};
