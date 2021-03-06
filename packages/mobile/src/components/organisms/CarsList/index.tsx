import React, { useCallback, ReactElement } from 'react';

import { useNavigation } from '@react-navigation/core';

import { Car } from '../../../types';
import { CarCard } from '../../molecules';
import * as S from './styles';

type CarsListProps = {
  cars: Car[] | undefined;
  listHeaderComponent?: ReactElement;
};

export const CarsList = ({ cars, listHeaderComponent }: CarsListProps) => {
  const navigation = useNavigation();

  const handleNavigateToCar = useCallback(
    (car: Car) => {
      navigation.navigate('Car', {
        car,
      });
    },
    [navigation],
  );

  return (
    <S.Container
      data={cars}
      keyExtractor={car => String(car.id)}
      contentContainerStyle={{
        paddingBottom: 24,
      }}
      ListHeaderComponent={listHeaderComponent || null}
      renderItem={({ item: car }) => (
        <CarCard
          name={car.name}
          brand={car.brand}
          valuePerDay={car.valuePerDay}
          image={car.image}
          fuel={car.fuel}
          onPress={() => handleNavigateToCar(car)}
        />
      )}
    />
  );
};
