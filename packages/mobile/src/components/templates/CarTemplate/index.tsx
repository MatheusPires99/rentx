import React, { useState, useCallback, useEffect } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { Car, BookStep } from '../../../types';
import { useCalendar, useTabBar } from '../../../hooks';
import { CarBottomButton, CarHeader } from '../../molecules';
import { CarContent, DatePicker, Success } from '../../organisms';

type CarTemplateProps = {
  car: Car;
};

export const CarTemplate = ({ car }: CarTemplateProps) => {
  const navigation = useNavigation();

  const { toggleTabBar } = useTabBar();
  const { handleCleanAllDates } = useCalendar();

  const [step, setStep] = useState(BookStep.Car);
  const [showSuccess, setShowSuccess] = useState(false);

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

    if (step === BookStep.Date) {
      handleCleanAllDates();
    }

    setStep(state => state - 1);
  }, [step, navigation, toggleTabBar, handleCleanAllDates]);

  const handleConfirmBook = () => {
    try {
      setShowSuccess(true);
      handleCleanAllDates();
    } catch (err) {
      console.log(err);
    }
  };

  const showDatePicker = step === BookStep.Date;

  const handleNavigateToHome = useCallback(() => navigation.navigate('Home'), [
    navigation,
  ]);

  if (showSuccess) {
    return (
      <Success
        title="Carro alugado!"
        description="Agora você só precisa ir até a concessionária da RENTX pegar o seu automóvel."
        onOk={handleNavigateToHome}
      />
    );
  }

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
