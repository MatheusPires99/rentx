import React from 'react';

import { useFormContext } from 'react-hook-form';

import { Car, Email, User } from '../../../../assets/icons';
import { Input } from '../../../atoms';
import * as S from '../styles';

export const SignUpDataFields = () => {
  const { formState } = useFormContext();

  return (
    <S.Container>
      <S.StepTitle>1. Dados</S.StepTitle>

      <Input
        name="name"
        placeholder="Nome"
        icon={User}
        error={formState.errors.name}
        autoCapitalize="words"
      />

      <Input
        name="email"
        placeholder="E-mail"
        icon={Email}
        error={formState.errors.email}
        marginTop={8}
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <Input
        name="cnh"
        placeholder="CNH"
        icon={Car}
        error={formState.errors.cnh}
        marginTop={8}
        keyboardType="numeric"
      />
    </S.Container>
  );
};
