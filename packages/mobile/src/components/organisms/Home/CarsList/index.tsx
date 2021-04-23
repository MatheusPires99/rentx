import React from 'react';

import { CARS } from '../../../../constants';
import { CarCard } from '../../../molecules';
import * as S from './styles';

export const CarsList = () => {
  return (
    <S.CarsListContainer
      data={CARS}
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
