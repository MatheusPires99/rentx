import React, { useEffect } from 'react';
import { LogBox } from 'react-native';

import { useTheme } from 'styled-components';

import {
  Droplet,
  GearShift,
  Speed,
  SteeringWheel,
  Up,
  User,
} from '../../../../assets/icons';
import { Car } from '../../../../types';
import * as S from './styles';

type CarTechnicalInfoProps = Pick<
  Car,
  'maxSpeed' | 'timeForMaxSpeed' | 'power' | 'fuel' | 'gearshift' | 'maxPeople'
>;

export const CarTechnicalInfo = ({
  maxSpeed,
  timeForMaxSpeed,
  power,
  fuel,
  gearshift,
  maxPeople,
}: CarTechnicalInfoProps) => {
  const theme = useTheme();

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const infos = [
    {
      icon: Speed,
      data: `${maxSpeed}km/h`,
    },
    {
      icon: Up,
      data: `${timeForMaxSpeed}s`,
    },
    {
      icon: SteeringWheel,
      data: `${power} HP`,
    },
    {
      icon: Droplet,
      data: fuel,
    },
    {
      icon: GearShift,
      data: gearshift,
    },
    {
      icon: User,
      data: `${maxPeople} pessoas`,
    },
  ];

  return (
    <S.Container
      data={infos}
      keyExtractor={info => info.data}
      numColumns={3}
      scrollEnabled={false}
      renderItem={({ item: info }) => {
        const Icon = info.icon;

        return (
          <S.Box>
            <Icon size={32} color={theme.colors.gray['600']} />
            <S.InfoText>{info.data}</S.InfoText>
          </S.Box>
        );
      }}
    />
  );
};
