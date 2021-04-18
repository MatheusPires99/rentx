/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

import { Step as StepType } from '../../organisms/Onboarding';
import * as S from './styles';

type StepsProps = {
  numberOfSteps: number;
  currentStep: StepType;
};

export const Steps = ({ numberOfSteps, currentStep }: StepsProps) => {
  const [steps] = useState(Array.from(Array(numberOfSteps).keys()));

  return (
    <S.Container>
      {steps.map((_, index) => (
        <S.Step key={index} active={index + 1 === currentStep} />
      ))}
    </S.Container>
  );
};
