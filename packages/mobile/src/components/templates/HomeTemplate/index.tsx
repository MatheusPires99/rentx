import React, { useEffect } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { useTheme } from 'styled-components';

import { Car } from '../../../types';
import { HomeHeader } from '../../molecules';
import { CarsList } from '../../organisms';
import { Loading } from './Loading';

type HomeTemplateProps = {
  cars: Car[] | undefined;
  isLoading: boolean;
};

export const HomeTemplate = ({ cars, isLoading }: HomeTemplateProps) => {
  const navigation = useNavigation();
  const theme = useTheme();

  useEffect(() => {
    navigation.setOptions({
      cardStyle: { backgroundColor: theme.colors['gray.50'] },
    });
  }, [navigation, theme]);

  return (
    <View style={{ flex: 1 }}>
      <HomeHeader carsAmount={cars?.length} isLoading={isLoading} />

      {isLoading ? <Loading /> : <CarsList cars={cars} />}
    </View>
  );
};
