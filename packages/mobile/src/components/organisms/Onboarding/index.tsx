import React, { useCallback, useState, useRef } from 'react';
import { Dimensions, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  withDelay,
} from 'react-native-reanimated';

import { Calendar, Car } from '../../../assets/icons';
import { Wellcome, OnboardingStep, OnboardingFooter } from '../../molecules';

const { width } = Dimensions.get('window');

export type Step = 1 | 2 | 3;

export const Onboarding = () => {
  const scrollViewRef = useRef<Animated.ScrollView>(null);
  const [step, setStep] = useState<Step>(1);

  const footerOpacity = useSharedValue(1);

  const handleChangeStep = useCallback(
    (toStep: Step) => {
      if (toStep === 3) {
        footerOpacity.value = withTiming(0, {
          duration: 250,
          easing: Easing.ease,
        });
      }

      if (step === 3 && toStep === 2) {
        footerOpacity.value = withDelay(
          200,
          withTiming(1, {
            duration: 250,
            easing: Easing.ease,
          }),
        );
      }

      setStep(toStep);

      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
          x: width * (toStep - 1),
          animated: true,
        });
      }
    },
    [step, footerOpacity],
  );

  return (
    <>
      <StatusBar style={step === 3 ? 'light' : 'dark'} />

      <View style={{ flex: 1 }}>
        <Animated.ScrollView
          ref={scrollViewRef}
          scrollEnabled={false}
          scrollEventThrottle={16}
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
          snapToInterval={width}
          decelerationRate="fast"
        >
          <OnboardingStep
            step={1}
            icon={Calendar}
            title="Primeiro, escolha a data"
            description="Você é quem define um período, e nós mostraremos os carros disponíveis."
          />

          <OnboardingStep
            step={2}
            icon={Car}
            title="Depois, escolha o carro"
            description="Vários modelos para você dirigir seguro, com conforto e segurança."
          />

          <Wellcome onPreviousStep={() => handleChangeStep(2)} />
        </Animated.ScrollView>

        <OnboardingFooter
          step={step}
          onNextStep={handleChangeStep}
          footerOpacity={footerOpacity}
        />
      </View>
    </>
  );
};
