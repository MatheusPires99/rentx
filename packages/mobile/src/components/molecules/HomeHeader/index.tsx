import React from 'react';

import { RentxFull } from '../../../assets/icons';
import { Header } from '../../atoms';
import * as S from './styles';

export const HomeHeader = () => {
  return (
    <Header height={64}>
      <RentxFull />

      <S.TotalCars>Total 12 carros</S.TotalCars>
    </Header>
  );
};
