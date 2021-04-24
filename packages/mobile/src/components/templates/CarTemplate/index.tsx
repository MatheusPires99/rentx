import React, { useEffect, ReactNode } from 'react';

import { useTabBar } from '../../../hooks';
import { CarHeader } from '../../molecules';
import { Button } from '../../atoms';
import * as S from './styles';

type CarTemplateProps = {
  step: number;
  buttonText: string;
  children: ReactNode;
};

export const CarTemplate = ({
  step,
  buttonText,
  children,
}: CarTemplateProps) => {
  const { toggleTabBar } = useTabBar();

  useEffect(() => {
    toggleTabBar(false);

    return () => toggleTabBar(true);
  }, [toggleTabBar]);

  return (
    <S.Container>
      <CarHeader step={step} />

      {children}

      <S.BookButtonContainer>
        <Button>{buttonText}</Button>
      </S.BookButtonContainer>
    </S.Container>
  );
};
