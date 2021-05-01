import React from 'react';

import * as S from './styles';

export type DividerProps = {
  marginVertical: number;
  color?: string;
};

export const Divider = ({ marginVertical, color }: DividerProps) => (
  <S.Container marginVertical={marginVertical} color={color} />
);
