import React from 'react';

import { useNavigation } from '@react-navigation/core';
import { useTheme } from 'styled-components';

import { useTabBar } from '../../../hooks';
import { BookStep } from '../../../types';
import { ArrowButton, Header, Steps } from '../../atoms';

type CarHeaderProps = {
  step: number;
};

export const CarHeader = ({ step }: CarHeaderProps) => {
  const theme = useTheme();
  const navigation = useNavigation();
  const { toggleTabBar } = useTabBar();

  const handleGoBack = () => {
    toggleTabBar(true);

    navigation.goBack();
  };

  const isCarOrConfirmStep = step === BookStep.Car || step === BookStep.Confirm;

  const themeColor = isCarOrConfirmStep ? 'light' : 'dark';

  return (
    <Header
      themeColor={themeColor}
      backgroundColor={isCarOrConfirmStep ? theme.colors.white : null}
    >
      <ArrowButton direction="left" onPress={handleGoBack} />

      {step && <Steps currentStep={step} numberOfSteps={3} />}
    </Header>
  );
};
