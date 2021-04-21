import React, { useCallback, useState, useRef, useEffect } from 'react';
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
import { useAuth } from '../../../hooks';
import { OnboardingStep as EnumOnboardingStep } from '../../../types';

const { width } = Dimensions.get('window');

export const Onboarding = () => {
  const { userHasOnboarding } = useAuth();

  const scrollViewRef = useRef<Animated.ScrollView>(null);
  const [step, setStep] = useState<EnumOnboardingStep>(EnumOnboardingStep.Date);

  const footerOpacity = useSharedValue(1);

  useEffect(() => {
    if (userHasOnboarding) {
      setStep(EnumOnboardingStep.Wellcome);

      footerOpacity.value = 0;
    }
  }, [userHasOnboarding, footerOpacity]);

  const handleChangeStep = useCallback(
    (toStep: EnumOnboardingStep) => {
      if (toStep === EnumOnboardingStep.Wellcome) {
        footerOpacity.value = withTiming(0, {
          duration: 250,
          easing: Easing.ease,
        });
      }

      if (
        step === EnumOnboardingStep.Wellcome &&
        toStep === EnumOnboardingStep.Car
      ) {
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
      <StatusBar style={EnumOnboardingStep.Wellcome === 3 ? 'light' : 'dark'} />

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
          {!userHasOnboarding && (
            <>
              <OnboardingStep
                step={EnumOnboardingStep.Date}
                icon={Calendar}
                title="Primeiro, escolha a data"
                description="Você é quem define um período, e nós mostraremos os carros disponíveis."
              />

              <OnboardingStep
                step={EnumOnboardingStep.Car}
                icon={Car}
                title="Depois, escolha o carro"
                description="Vários modelos para você dirigir seguro, com conforto e segurança."
              />
            </>
          )}

          <Wellcome
            onPreviousStep={() => handleChangeStep(EnumOnboardingStep.Car)}
          />
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
