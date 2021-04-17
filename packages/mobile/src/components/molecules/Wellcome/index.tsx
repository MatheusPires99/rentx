import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Rentx } from '../../../assets/icons';
import { Button } from '../../atoms';
import * as S from './styles';

type WellcomeProps = {
  onPreviousStep: () => void;
};

export const Wellcome = ({ onPreviousStep }: WellcomeProps) => {
  return (
    <>
      <StatusBar style="light" />

      <S.Container>
        <Rentx />

        <S.Main>
          <S.Title>Seja {'\n'} Bem-vindo</S.Title>
          <S.Subtitle>O que você desenha fazer?</S.Subtitle>
        </S.Main>

        <S.Footer>
          <S.SignButtons>
            <S.ButtonWrapper>
              <Button>Login</Button>
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
    </>
  );
};
