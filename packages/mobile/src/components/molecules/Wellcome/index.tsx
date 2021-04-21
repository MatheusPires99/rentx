import React, { useEffect } from 'react';

import { useNavigation } from '@react-navigation/core';

import { useAuth } from '../../../hooks';
import { Rentx } from '../../../assets/icons';
import { Button } from '../../atoms';
import * as S from './styles';

type WellcomeProps = {
  onPreviousStep: () => void;
};

export const Wellcome = ({ onPreviousStep }: WellcomeProps) => {
  const navigation = useNavigation();
  const { userHasOnboarding, updateUser } = useAuth();

  useEffect(() => {
    if (!userHasOnboarding) {
      updateUser({ hasOnboarding: true });
    }
  }, [userHasOnboarding, updateUser]);

  const handleNavigateToSignIn = () => {
    navigation.navigate('SignIn');
  };

  const handleNavigateToSignUp = () => {
    navigation.navigate('SignUpData');
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
            <Button onPress={handleNavigateToSignUp} variant="secondary">
              Cadastro
            </Button>
          </S.ButtonWrapper>
        </S.SignButtons>

        {!userHasOnboarding && (
          <S.GoBackButton onPress={onPreviousStep}>
            <S.GoBackButtonText>Voltar</S.GoBackButtonText>
          </S.GoBackButton>
        )}
      </S.Footer>
    </S.Container>
  );
};
