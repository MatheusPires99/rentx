import React, { useState, useCallback, useEffect } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { Car, BookStep } from '../../../types';
import { useCalendar, useTabBar } from '../../../hooks';
import { CarBottomButton, CarHeader } from '../../molecules';
import { CarContent, DatePicker } from '../../organisms';

type CarTemplateProps = {
  car: Car;
};

export const CarTemplate = ({ car }: CarTemplateProps) => {
  const navigation = useNavigation();

  const { toggleTabBar } = useTabBar();
  const { handleCleanAllDates } = useCalendar();

  const [step, setStep] = useState(BookStep.Car);

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
    <View style={{ flex: 1 }}>
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
        <CarBottomButton
          step={step}
          onPress={
            step === BookStep.Confirm ? handleConfirmBook : handleNextStep
          }
        />
      )}
    </View>
  );
};
