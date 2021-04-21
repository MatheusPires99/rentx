import React, { useMemo } from 'react';

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { ArrowButton, Steps } from '../../atoms';
import { OnboardingStep } from '../../../types';
import * as S from './styles';

type OnboardingFooterProps = {
  step: OnboardingStep;
  onNextStep: (step: OnboardingStep) => void;
  footerOpacity: Animated.SharedValue<number>;
};

export const OnboardingFooter = ({
  step,
  onNextStep,
  footerOpacity,
}: OnboardingFooterProps) => {
  const goToStep = useMemo(() => {
    if (step === OnboardingStep.Date) return OnboardingStep.Car;

    if (step === OnboardingStep.Car) return OnboardingStep.Wellcome;

    return OnboardingStep.Date;
  }, [step]);

  const footerStyle = useAnimatedStyle(() => {
    return {
      opacity: footerOpacity.value,
      zIndex: interpolate(
        footerOpacity.value,
        [0, 1],
        [-1, 1],
        Extrapolate.CLAMP,
      ),
    };
  });

  return (
    <S.Footer style={footerStyle}>
      <Steps numberOfSteps={2} currentStep={step} />

      <ArrowButton direction="right" onPress={() => onNextStep(goToStep)} />
    </S.Footer>
  );
};
