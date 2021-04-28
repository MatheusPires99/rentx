import React from 'react';

import { useFormContext } from 'react-hook-form';

import { Car, Email, Lock, User } from '../../../assets/icons';
import { Input, Text } from '../../atoms';
import * as S from './styles';

type SignUpFieldsProps = {
  step: number;
};

export const SignUpFields = ({ step }: SignUpFieldsProps) => {
  const { formState } = useFormContext();

  return (
    <>
      <S.Container isHiding={step === 2}>
        <Text
          fontFamily="archivo.semiBold"
          fontSize="lg"
          style={{ marginBottom: 24 }}
        >
          {step}. Dados
        </Text>

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

      <S.Container isHiding={step === 1}>
        <Text
          fontFamily="archivo.semiBold"
          fontSize="lg"
          style={{ marginBottom: 24 }}
        >
          {step}. Senha
        </Text>

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
          error={formState.errors.password_confirmation}
          isSecureField
          marginTop={8}
        />
      </S.Container>
    </>
  );
};
