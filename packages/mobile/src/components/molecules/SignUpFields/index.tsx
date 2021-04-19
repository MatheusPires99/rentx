import React from 'react';

import { useFormContext } from 'react-hook-form';

import { Car, Email, Lock, User } from '../../../assets/icons';
import { Input } from '../../atoms';
import * as S from './styles';

type SignUpFieldsProps = {
  step: number;
};

export const SignUpFields = ({ step }: SignUpFieldsProps) => {
  const { formState } = useFormContext();

  return (
    <>
      {step === 1 ? (
        <>
          <S.StepTitle>{step}. Dados</S.StepTitle>

          <Input
            name="user"
            placeholder="Nome"
            icon={User}
            error={formState.errors.user}
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
        </>
      ) : (
        <>
          <S.StepTitle>{step}. Senha</S.StepTitle>

          <Input
            name="password"
            placeholder="Senha"
            icon={Lock}
            error={formState.errors.password}
            isSecureField
          />

          <Input
            name="password_confirmation"
            placeholder="Repetir senha"
            icon={Lock}
            error={formState.errors.password}
            isSecureField
            marginTop={8}
          />
        </>
      )}
    </>
  );
};
