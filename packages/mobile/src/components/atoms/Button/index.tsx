import React, { ReactNode } from 'react';
import { ActivityIndicator } from 'react-native';

import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import * as S from './styles';

export type Variant = 'primary' | 'secondary';

type ButtonProps = RectButtonProps & {
  variant?: Variant;
  isLoading?: boolean;
  children: ReactNode;
};

export const Button = ({
  variant = 'primary',
  isLoading,
  children,
  ...rest
}: ButtonProps) => {
  const theme = useTheme();

  return (
    <S.Container variant={variant} {...rest}>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.white} size="small" />
      ) : (
        <S.ButtonText>{children}</S.ButtonText>
      )}
    </S.Container>
  );
};
