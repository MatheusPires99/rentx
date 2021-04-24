import React from 'react';

import { useNavigation } from '@react-navigation/core';
import { useTheme } from 'styled-components';

import { ArrowButton, Header, Steps } from '../../atoms';

export const CarHeader = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const handleGoBack = () => navigation.goBack();

  return (
    <Header themeColor="light" backgroundColor={theme.colors.white}>
      <ArrowButton direction="left" onPress={handleGoBack} />

      <Steps currentStep={1} numberOfSteps={4} />
    </Header>
  );
};
