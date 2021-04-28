import React from 'react';

import { RentxFull } from '../../../assets/icons';
import { Header, Text } from '../../atoms';
import { Loading } from './Loading';

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
        <Text color="gray.400">Total {carsAmount} carros</Text>
      )}
    </Header>
  );
};
