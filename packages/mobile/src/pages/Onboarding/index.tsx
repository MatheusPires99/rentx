import React, { useCallback, useState } from 'react';

import { Calendar, Car } from '../../assets/icons';
import { Wellcome } from '../../components/molecules';
import { OnboardingTemplate } from '../../components/templates';

export function Onboarding() {
  const [step, setStep] = useState(1);

  const handleNextStep = useCallback(() => setStep(state => state + 1), []);

  const handlePreviousStep = useCallback(() => setStep(state => state - 1), []);

  return (
    <>
      {step === 1 && (
        <OnboardingTemplate
          icon={Calendar}
          stepNumber={step}
          title="Primeiro, escolha a data"
          description="Você é quem define um período, e nós mostraremos os carros disponíveis."
          onNextStep={handleNextStep}
        />
      )}

      {step === 2 && (
        <OnboardingTemplate
          icon={Car}
          stepNumber={step}
          title="Depois, escolha o carro"
          description="Vários modelos para você dirigir seguro, com conforto e segurança."
          onNextStep={handleNextStep}
        />
      )}

      {step === 3 && <Wellcome onPreviousStep={handlePreviousStep} />}
    </>
  );
}
