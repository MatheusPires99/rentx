import React from 'react';

import { Step } from '../../templates/OnboardingTemplate';
import * as S from './styles';

type OnboardingStepProps = {
  step: Step;
  icon: any;
  title: string;
  description: string;
};

export const OnboardingStep = ({
  step,
  icon: Icon,
  title,
  description,
}: OnboardingStepProps) => {
  return (
    <S.Container>
      <S.Header>
        <Icon />

        <S.StepNumber>0{step}</S.StepNumber>
      </S.Header>

      <S.Main>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Main>
    </S.Container>
  );
};
