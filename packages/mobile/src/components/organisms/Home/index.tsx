import React, { useEffect } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { useTheme } from 'styled-components';

import { HomeHeader } from '../../molecules';
import { CarsList } from './CarsList';
import { getCars } from '../../../services/cars';
import { Loading } from './Loading';

export const Home = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  const { data: cars, isLoading, error } = getCars();

  useEffect(() => {
    navigation.setOptions({
      cardStyle: { backgroundColor: theme.colors.gray['50'] },
    });
  }, [navigation, theme]);

  return (
    <View style={{ flex: 1 }}>
      <HomeHeader />

      {isLoading ? <Loading /> : <CarsList cars={cars} />}
    </View>
  );
};
