import React from 'react';
import { View } from 'react-native';

import { Car } from '../../../../types';
import { formatToPtBrCurrency } from '../../../../utils';
import * as S from './styles';

type CarInfoRowProps = Pick<Car, 'brand' | 'name' | 'valuePerDay'>;

export const CarInfoRow = ({ brand, name, valuePerDay }: CarInfoRowProps) => {
  const formattedValuePerDay = formatToPtBrCurrency(valuePerDay);

  return (
    <S.Container>
      <View>
        <S.SubTitle>{brand}</S.SubTitle>
        <S.Title color="gray.600">{name}</S.Title>
      </View>
      <View>
        <S.SubTitle>AO DIA</S.SubTitle>
        <S.Title color="primary">{formattedValuePerDay}</S.Title>
      </View>
    </S.Container>
  );
};
