import React, { useState } from 'react';

import { useRoute } from '@react-navigation/core';

import { CarContent } from '../../components/organisms';
import { CarTemplate } from '../../components/templates';
import { Car as CarType, BookStep } from '../../types';

type RouteParams = {
  car: CarType;
};

export const Car = () => {
  const route = useRoute();

  const [step, setStep] = useState(BookStep.Car);

  const { car } = route.params as RouteParams;

  return (
    <CarTemplate step={step} buttonText="Escolher período do aluguel">
      {(step === BookStep.Car || step === BookStep.Confirm) && (
        <CarContent car={car} />
      )}

      {/* {step === BookStep.Date && ()} */}
    </CarTemplate>
  );
};
