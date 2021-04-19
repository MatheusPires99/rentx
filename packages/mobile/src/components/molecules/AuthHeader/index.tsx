import React from 'react';

import { ArrowButton } from '../../atoms';
import * as S from './styles';

type AuthHeaderProps = {
  onGoBack: () => void;
};

export const AuthHeader = ({ onGoBack }: AuthHeaderProps) => {
  return (
    <S.Container>
      <ArrowButton direction="left" onPress={onGoBack} />
    </S.Container>
  );
};
