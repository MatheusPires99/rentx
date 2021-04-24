import React, { useEffect } from 'react';

import { useTabBar } from '../../../hooks';
import { Car } from '../../../types';
import { CarInfoRow } from './CarInfoRow';
import { CarTechnicalInfo } from './CarTechnicalInfo';
import * as S from './styles';

type CarContentProps = {
  car: Car;
};

export const CarContent = ({ car }: CarContentProps) => {
  const { toggleTabBar } = useTabBar();

  useEffect(() => {
    toggleTabBar(false);

    return () => toggleTabBar(true);
  }, [toggleTabBar]);

  return (
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
  );
};
