import React from 'react';

import { useRoute } from '@react-navigation/core';

import { Car as CarType } from '../../../types';
import { CarHeader } from '../../molecules';
import { CarInfoRow } from './CarInfoRow';
import { CarTechnicalInfo } from './CarTechnicalInfo';
import * as S from './styles';

type RouteParams = {
  car: CarType;
};

export const Car = () => {
  const route = useRoute();

  const { car } = route.params as RouteParams;

  return (
    <S.Container>
      <CarHeader />

      <S.Content>
        <S.Image source={{ uri: car.image }} resizeMode="contain" />

        <CarInfoRow
          brand={car.brand}
          name={car.name}
          valuePerDay={car.valuePerDay}
        />

        <CarTechnicalInfo
          maxSpeed={car.maxSpeed}
          timeForMaxSpeed={car.timeForMaxSpeed}
          power={car.power}
          fuel={car.fuel}
          gearshift={car.gearshift}
          maxPeople={car.maxPeople}
        />
      </S.Content>
    </S.Container>
  );
};
