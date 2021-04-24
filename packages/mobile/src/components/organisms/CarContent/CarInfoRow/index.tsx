import React from 'react';

import { useTheme } from 'styled-components';

import { Car } from '../../../../types';
import { formatToPtBrCurrency } from '../../../../utils';
import * as S from './styles';

type CarInfoRowProps = Pick<Car, 'brand' | 'name' | 'valuePerDay'>;

export const CarInfoRow = ({ brand, name, valuePerDay }: CarInfoRowProps) => {
  const theme = useTheme();

  const formattedValuePerDay = formatToPtBrCurrency(valuePerDay);

  return (
    <S.Container>
      <S.RowLeft>
        <S.SubTitle>{brand}</S.SubTitle>
        <S.Title color={theme.colors.gray['600']}>{name}</S.Title>
      </S.RowLeft>
      <S.RowRight>
        <S.SubTitle>AO DIA</S.SubTitle>
        <S.Title color={theme.colors.primary}>{formattedValuePerDay}</S.Title>
      </S.RowRight>
    </S.Container>
  );
};
