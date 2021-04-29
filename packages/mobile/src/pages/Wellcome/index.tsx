import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { useNavigation } from '@react-navigation/core';

import { Rentx } from '../../assets/icons';
import { Button, Text } from '../../components/atoms';
import * as S from './styles';

export const Wellcome = () => {
  const navigation = useNavigation();

  const handleNavigateToSignIn = () => {
    navigation.navigate('SignIn');
  };

  const handleNavigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <>
      <StatusBar style="light" />

      <S.Container>
        <Rentx />

        <S.Main>
          <Text
            fontFamily="archivo.semiBold"
            fontSize="3xl"
            color="gray.50"
            style={{ textAlign: 'center', marginBottom: 16 }}
          >
            Seja {'\n'} Bem-vindo
          </Text>
          <Text color="gray.200">O que você desenha fazer?</Text>
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
        </S.Footer>
      </S.Container>
    </>
  );
};
