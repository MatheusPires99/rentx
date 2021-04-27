import React, { useState, useMemo, useCallback } from 'react';

import { useNavigation, useRoute } from '@react-navigation/core';

import { CarContent, DatePicker } from '../../components/organisms';
import { CarTemplate } from '../../components/templates';
import { Car as CarType, BookStep, BookDate } from '../../types';
import { useTabBar } from '../../hooks';

type RouteParams = {
  car: CarType;
};

export const Car = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { toggleTabBar } = useTabBar();

  const [step, setStep] = useState(BookStep.Car);
  const [bookDate, setBookDate] = useState<BookDate>();

  const { car } = route.params as RouteParams;

  const buttonText = useMemo(() => {
    if (step === BookStep.Car) return 'Escolher período do aluguel';

    if (step === BookStep.Date) return 'Confirmar';

    if (step === BookStep.Confirm) return 'Alugar agora';

    return '';
  }, [step]);

  const handleNextStep = useCallback(() => setStep(state => state + 1), []);

  const handlePreviousStep = useCallback(() => {
    if (step === BookStep.Car) {
      navigation.goBack();
      toggleTabBar(true);

      return;
    }

    setStep(state => state - 1);
  }, [step, navigation, toggleTabBar]);

  const handleChangeBookDate = useCallback(
    (date: BookDate) => setBookDate(date),
    [],
  );

  return (
    <CarTemplate
      step={step}
      buttonText={buttonText}
      onNextStep={handleNextStep}
      onPreviousStep={handlePreviousStep}
    >
      {(step === BookStep.Car || step === BookStep.Confirm) && (
        <CarContent car={car} />
      )}

      {step === BookStep.Date && (
        <DatePicker
          title="Escolha uma data de início e fim do aluguel"
          bookDate={bookDate}
          onDateChange={handleChangeBookDate}
        />
      )}
    </CarTemplate>
  );
};
