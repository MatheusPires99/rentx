import React, { useEffect } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { useTheme } from 'styled-components';

import { HomeHeader } from '../../molecules';
import { CarsList } from './CarsList';

export const Home = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  useEffect(() => {
    navigation.setOptions({
      cardStyle: { backgroundColor: theme.colors.gray['50'] },
    });
  }, [navigation, theme]);

  return (
    <View style={{ flex: 1 }}>
      <HomeHeader />

      <CarsList />
    </View>
  );
};
