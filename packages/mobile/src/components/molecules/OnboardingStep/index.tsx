import React from 'react';

import { useTheme } from 'styled-components';

import { IconType } from '../../../types';
import { Step } from '../../organisms/Onboarding';
import * as S from './styles';

type OnboardingStepProps = {
  step: Step;
  icon: IconType;
  title: string;
  description: string;
};

export const OnboardingStep = ({
  step,
  icon: Icon,
  title,
  description,
}: OnboardingStepProps) => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.Header>
        <Icon color={theme.colors.primary} size={80} />

        <S.StepNumber>0{step}</S.StepNumber>
      </S.Header>

      <S.Main>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Main>
    </S.Container>
  );
};
