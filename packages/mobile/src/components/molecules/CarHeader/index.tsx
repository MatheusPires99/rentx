import React from 'react';

import { useTheme } from 'styled-components';

import { BookStep } from '../../../types';
import { ArrowButton, Header, Steps } from '../../atoms';

type CarHeaderProps = {
  step: number;
  onGoBack: () => void;
};

export const CarHeader = ({ step, onGoBack }: CarHeaderProps) => {
  const theme = useTheme();

  const isCarOrConfirmStep = step === BookStep.Car || step === BookStep.Confirm;
  const isDateStep = step === BookStep.Date;

  const themeColor = isCarOrConfirmStep ? 'light' : 'dark';

  return (
    <Header
      themeColor={themeColor}
      backgroundColor={isCarOrConfirmStep ? theme.colors.white : null}
    >
      <ArrowButton
        direction="left"
        color={isDateStep ? theme.colors.white : undefined}
        onPress={onGoBack}
      />

      {step && (
        <Steps
          currentStep={step}
          numberOfSteps={3}
          currentStepColor={isDateStep && theme.colors.white}
        />
      )}
    </Header>
  );
};
