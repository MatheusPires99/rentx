import React from 'react';

import { RentxFull } from '../../../assets/icons';
import { Header } from '../../atoms';
import { Loading } from './Loading';
import * as S from './styles';

type HomeHeaderProps = {
  carsAmount: number | undefined;
  isLoading: boolean;
};

export const HomeHeader = ({ carsAmount, isLoading }: HomeHeaderProps) => {
  return (
    <Header height={64}>
      <RentxFull />

      {isLoading ? (
        <Loading />
      ) : (
        <S.TotalCars>Total {carsAmount} carros</S.TotalCars>
      )}
    </Header>
  );
};
