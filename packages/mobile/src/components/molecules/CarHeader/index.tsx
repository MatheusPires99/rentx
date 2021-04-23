import React from 'react';

import { useNavigation } from '@react-navigation/core';

import { ArrowButton, Header, Steps } from '../../atoms';

export const CarHeader = () => {
  const navigation = useNavigation();

  const handleGoBack = () => navigation.goBack();

  return (
    <Header themeColor="light">
      <ArrowButton direction="left" onPress={handleGoBack} />

      <Steps currentStep={1} numberOfSteps={4} />
    </Header>
  );
};
