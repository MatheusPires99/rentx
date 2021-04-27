/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

import * as S from './styles';

type StepsProps = {
  numberOfSteps: number;
  currentStep: number;
  currentStepColor?: string | false;
};

export const Steps = ({
  numberOfSteps,
  currentStep,
  currentStepColor,
}: StepsProps) => {
  const [steps] = useState(Array.from(Array(numberOfSteps).keys()));

  return (
    <S.Container>
      {steps.map((_, index) => (
        <S.Step
          key={index}
          active={index + 1 === currentStep}
          currentStepColor={currentStepColor}
        />
      ))}
    </S.Container>
  );
};
