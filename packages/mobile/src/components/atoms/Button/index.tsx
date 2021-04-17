import React, { ReactNode } from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';

import * as S from './styles';

export type Variant = 'primary' | 'secondary';

type ButtonProps = RectButtonProps & {
  variant?: Variant;
  children: ReactNode;
};

export const Button = ({
  variant = 'primary',
  children,
  ...rest
}: ButtonProps) => (
  <S.Container variant={variant} {...rest}>
    <S.ButtonText>{children}</S.ButtonText>
  </S.Container>
);
