import React from 'react';

import { useNavigation } from '@react-navigation/core';
import { useTheme } from 'styled-components';

import { ArrowButton, Header, Steps } from '../../atoms';
import { useTabBar } from '../../../hooks';

export const CarHeader = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const { toggleTabBar } = useTabBar();

  const handleGoBack = () => {
    toggleTabBar(true);

    navigation.goBack();
  };

  return (
    <Header themeColor="light" backgroundColor={theme.colors.white}>
      <ArrowButton direction="left" onPress={handleGoBack} />

      <Steps currentStep={1} numberOfSteps={4} />
    </Header>
  );
};
