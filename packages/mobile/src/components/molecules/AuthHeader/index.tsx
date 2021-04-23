import React from 'react';

import { ArrowButton, Steps, Header } from '../../atoms';

type AuthHeaderProps = {
  onGoBack: () => void;
  step?: number;
};

export const AuthHeader = ({ onGoBack, step }: AuthHeaderProps) => {
  return (
    <Header themeColor="light">
      <ArrowButton direction="left" onPress={onGoBack} />

      {!!step && <Steps currentStep={step} numberOfSteps={2} />}
    </Header>
  );
};
