import React from 'react';

import { ArrowButton, Steps } from '../../atoms';
import * as S from './styles';

type AuthHeaderProps = {
  onGoBack: () => void;
  step?: number;
};

export const AuthHeader = ({ onGoBack, step }: AuthHeaderProps) => {
  return (
    <S.Container>
      <S.Content>
        <ArrowButton direction="left" onPress={onGoBack} />

        {!!step && <Steps currentStep={step} numberOfSteps={2} />}
      </S.Content>
    </S.Container>
  );
};
