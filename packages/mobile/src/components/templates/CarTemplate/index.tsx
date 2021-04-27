import React, { useEffect, ReactNode, useMemo } from 'react';
import { View } from 'react-native';

import { useTabBar } from '../../../hooks';
import { CarHeader } from '../../molecules';
import { Button } from '../../atoms';
import * as S from './styles';
import { BookStep } from '../../../types';

type CarTemplateProps = {
  step: number;
  buttonText: string;
  onNextStep: () => void;
  onPreviousStep: () => void;
  children: ReactNode;
};

export const CarTemplate = ({
  step,
  buttonText,
  onNextStep,
  onPreviousStep,
  children,
}: CarTemplateProps) => {
  const { toggleTabBar } = useTabBar();

  useEffect(() => {
    toggleTabBar(false);

    return () => toggleTabBar(true);
  }, [toggleTabBar]);

  const disableButton = useMemo(() => step === BookStep.Date, [step]);

  return (
    <S.Container>
      <CarHeader step={step} onPreviousStep={onPreviousStep} />

      <View style={{ flex: 1 }}>{children}</View>

      <S.BookButtonContainer step={step}>
        <Button onPress={onNextStep} disabled={disableButton}>
          {buttonText}
        </Button>
      </S.BookButtonContainer>
    </S.Container>
  );
};
