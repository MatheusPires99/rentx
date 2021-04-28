import React, { useEffect } from 'react';

import { useCalendar, useTabBar } from '../../../hooks';
import { Car } from '../../../types';
import { CarInfoRow } from './CarInfoRow';
import { CarTechnicalInfo } from './CarTechnicalInfo';
import { BookSummary } from './BookSummary';
import * as S from './styles';
import { Text } from '../../atoms';

type CarContentProps = {
  car: Car;
};

export const CarContent = ({ car }: CarContentProps) => {
  const { startDate, endDate } = useCalendar();
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

      {!!startDate && !!endDate ? (
        <BookSummary valuePerDay={car.valuePerDay} />
      ) : (
        <Text
          color="gray.400"
          style={{
            lineHeight: 25,
            width: '95%',
            marginTop: 24,
          }}
        >
          {car.description}
        </Text>
      )}
    </S.Content>
  );
};
