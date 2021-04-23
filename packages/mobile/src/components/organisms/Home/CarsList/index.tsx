import React from 'react';

import { Car } from '../../../../types';
import { CarCard } from '../../../molecules';
import * as S from './styles';

type CarsListProps = {
  cars: Car[] | undefined;
};

export const CarsList = ({ cars }: CarsListProps) => {
  return (
    <S.Container
      data={cars}
      keyExtractor={car => String(car.id)}
      contentContainerStyle={{
        paddingBottom: 24,
      }}
      renderItem={({ item: car }) => (
        <CarCard
          name={car.name}
          brand={car.brand}
          valuePerDay={car.valuePerDay}
          fuel={car.fuel}
          image={car.image}
        />
      )}
    />
  );
};
