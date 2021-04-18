import React, { useMemo } from 'react';

import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { ChevronRight } from '../../../assets/icons';
import { Step } from '../../templates/OnboardingTemplate';
import * as S from './styles';

type OnboardingFooterProps = {
  step: Step;
  onNextStep: (step: Step) => void;
  footerOpacity: Animated.SharedValue<number>;
};

export const OnboardingFooter = ({
  step,
  onNextStep,
  footerOpacity,
}: OnboardingFooterProps) => {
  const goToStep = useMemo(() => {
    if (step === 1) return 2;

    if (step === 2) return 3;

    return 1;
  }, [step]);

  const footerStyle = useAnimatedStyle(() => {
    return {
      opacity: footerOpacity.value,
      zIndex: interpolate(footerOpacity.value, [0, 1], [-1, 1]),
    };
  });

  return (
    <S.Footer style={footerStyle}>
      <S.StepCount>
        <S.Step active={step === 1} />
        <S.Step active={step === 2} />
      </S.StepCount>

      <S.NextButton onPress={() => onNextStep(goToStep)}>
        <ChevronRight />
      </S.NextButton>
    </S.Footer>
  );
};
