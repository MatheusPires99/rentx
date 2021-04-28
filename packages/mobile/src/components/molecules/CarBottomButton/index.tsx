import React from 'react';

import { BookStep } from '../../../types';
import { Button } from '../../atoms';
import * as S from './styles';

type CarBottomButtonProps = {
  step: number;
  onPress: () => void;
};

export const CarBottomButton = ({ step, onPress }: CarBottomButtonProps) => {
  return (
    <S.Container>
      <Button
        onPress={onPress}
        variant={step === BookStep.Confirm ? 'green' : 'primary'}
      >
        {step === BookStep.Car ? 'Escolher período do aluguel' : 'Alugar agora'}
      </Button>
    </S.Container>
  );
};
