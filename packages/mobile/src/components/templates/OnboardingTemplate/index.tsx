import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { ChevronRight } from '../../../assets/icons';
import * as S from './styles';

type OnboardingTemplateProps = {
  icon: any;
  stepNumber: number;
  title: string;
  description: string;
  onNextStep: () => void;
};

export const OnboardingTemplate = ({
  icon: Icon,
  stepNumber,
  title,
  description,
  onNextStep,
}: OnboardingTemplateProps) => {
  return (
    <>
      <StatusBar style="dark" />

      <S.Container>
        <S.Header>
          <Icon />

          <S.StepNumber>0{stepNumber}</S.StepNumber>
        </S.Header>

        <S.Main>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Main>

        <S.Footer>
          <S.StepCount>
            <S.Step active={stepNumber === 1} />
            <S.Step active={stepNumber === 2} />
          </S.StepCount>

          <S.NextButton onPress={onNextStep}>
            <ChevronRight />
          </S.NextButton>
        </S.Footer>
      </S.Container>
    </>
  );
};
