import React, { useEffect } from 'react';

import { useRoute } from '@react-navigation/core';

import { useTabBar } from '../../../hooks';
import { Car as CarType } from '../../../types';
import { CarHeader } from '../../molecules';
import { CarInfoRow } from './CarInfoRow';
import { CarTechnicalInfo } from './CarTechnicalInfo';
import * as S from './styles';
import { Button } from '../../atoms';

type RouteParams = {
  car: CarType;
};

export const Car = () => {
  const { toggleTabBar } = useTabBar();
  const route = useRoute();

  const { car } = route.params as RouteParams;

  useEffect(() => {
    toggleTabBar(false);

    return () => toggleTabBar(true);
  }, [toggleTabBar]);

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

        <S.Description>{car.description}</S.Description>
      </S.Content>

      <S.BookButtonContainer>
        <Button>Escolher período do aluguel</Button>
      </S.BookButtonContainer>
    </S.Container>
  );
};
