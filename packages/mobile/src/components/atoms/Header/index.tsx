import React, { ReactNode } from 'react';
import { ViewProps } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import * as S from './styles';

type HeaderProps = ViewProps & {
  themeColor?: 'light' | 'dark';
  height?: number;
  backgroundColor?: string | null;
  children: ReactNode;
};

export const Header = ({
  themeColor = 'dark',
  height = 48,
  backgroundColor,
  children,
  ...rest
}: HeaderProps) => {
  return (
    <>
      <StatusBar style={themeColor === 'dark' ? 'light' : 'dark'} />

      <S.Container
        themeColor={themeColor}
        height={height}
        backgroundColor={backgroundColor}
        {...rest}
      >
        <S.Content>{children}</S.Content>
      </S.Container>
    </>
  );
};
