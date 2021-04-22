import React, { ReactNode } from 'react';

import * as S from './styles';

type HeaderProps = {
  variant: 'light' | 'dark';
  height?: number;
  children: ReactNode;
};

export const Header = ({
  variant = 'dark',
  height = 48,
  children,
}: HeaderProps) => {
  return (
    <S.Container variant={variant} height={height}>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};
