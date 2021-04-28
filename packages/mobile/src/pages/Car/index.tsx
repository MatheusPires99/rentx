import React, { useState, useCallback, useEffect } from 'react';
import { View } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/core';

import { Button } from '../../components/atoms';
import { CarContent, DatePicker } from '../../components/organisms';
import { CarHeader } from '../../components/molecules';
import { Car as CarType, BookStep } from '../../types';
import { useCalendar, useTabBar } from '../../hooks';
import * as S from './styles';

type RouteParams = {
  car: CarType;
};

export const Car = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { toggleTabBar } = useTabBar();
  const { handleCleanAllDates } = useCalendar();

  const [step, setStep] = useState(BookStep.Car);

  const { car } = route.params as RouteParams;

  useEffect(() => {
    toggleTabBar(false);

    return () => toggleTabBar(true);
  }, [toggleTabBar]);

  const handleNextStep = useCallback(() => setStep(state => state + 1), []);

  const handlePreviousStep = useCallback(() => {
    if (step === BookStep.Car) {
      navigation.goBack();
      toggleTabBar(true);

      return;
    }

    setStep(state => state - 1);
  }, [step, navigation, toggleTabBar]);

  const handleConfirmBook = () => {
    try {
      // After everything:
      handleCleanAllDates();
    } catch (err) {}
  };

  const showDatePicker = step === BookStep.Date;

  return (
    <S.Container>
      <CarHeader step={step} onGoBack={handlePreviousStep} />

      <View style={{ flex: 1 }}>
        <>
          {!showDatePicker && <CarContent car={car} />}

          {showDatePicker && (
            <DatePicker
              title="Escolha uma data de início e fim do aluguel"
              onConfirm={handleNextStep}
            />
          )}
        </>
      </View>

      {!showDatePicker && (
        <S.ButtonContainer>
          <Button
            onPress={
              step === BookStep.Confirm ? handleConfirmBook : handleNextStep
            }
            variant={step === BookStep.Confirm ? 'green' : 'primary'}
          >
            {step === BookStep.Car
              ? 'Escolher período do aluguel'
              : 'Alugar agora'}
          </Button>
        </S.ButtonContainer>
      )}
    </S.Container>
  );
};
