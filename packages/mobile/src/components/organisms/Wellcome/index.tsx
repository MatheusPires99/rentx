import React from 'react';

import { useNavigation } from '@react-navigation/core';

import { Rentx } from '../../../assets/icons';
import { Button } from '../../atoms';
import * as S from './styles';

type WellcomeProps = {
  onPreviousStep: () => void;
};

export const Wellcome = ({ onPreviousStep }: WellcomeProps) => {
  const navigation = useNavigation();

  const handleNavigateToSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <S.Container>
      <Rentx />

      <S.Main>
        <S.Title>Seja {'\n'} Bem-vindo</S.Title>
        <S.Subtitle>O que você desenha fazer?</S.Subtitle>
      </S.Main>

      <S.Footer>
        <S.SignButtons>
          <S.ButtonWrapper>
            <Button onPress={handleNavigateToSignIn}>Login</Button>
          </S.ButtonWrapper>
          <S.ButtonWrapper style={{ marginLeft: 16 }}>
            <Button variant="secondary">Cadastro</Button>
          </S.ButtonWrapper>
        </S.SignButtons>

        <S.GoBackButton onPress={onPreviousStep}>
          <S.GoBackButtonText>Voltar</S.GoBackButtonText>
        </S.GoBackButton>
      </S.Footer>
    </S.Container>
  );
};
