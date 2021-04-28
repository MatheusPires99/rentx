import React, { ReactNode } from 'react';
import { ActivityIndicator } from 'react-native';

import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import { Text } from '../Text';
import * as S from './styles';

export type Variant = 'primary' | 'secondary' | 'green';

type ButtonProps = RectButtonProps & {
  variant?: Variant;
  isLoading?: boolean;
  disabled?: boolean;
  children: ReactNode;
};

export const Button = ({
  variant = 'primary',
  isLoading,
  disabled,
  children,
  ...rest
}: ButtonProps) => {
  const theme = useTheme();

  return (
    <S.Container
      variant={variant}
      disabled={disabled}
      enabled={!disabled}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={theme.colors.white} size="small" />
      ) : (
        <Text fontFamily="inter.medium" color="white">
          {children}
        </Text>
      )}
    </S.Container>
  );
};
