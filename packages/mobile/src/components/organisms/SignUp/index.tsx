import React, { useState } from 'react';
import { Text } from 'react-native';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/core';

import { SIGN_IN_FORM_SCHEMA } from '../../../schemas';
import { Car, Email, Lock, User } from '../../../assets/icons';
import { Input } from '../../atoms';
import { Auth } from '../../molecules';

type SignUpFormData = {
  email: string;
  passowrd: string;
};

export const SignUp = () => {
  const { handleSubmit, control, formState } = useForm({
    resolver: yupResolver(SIGN_IN_FORM_SCHEMA),
  });
  const navigation = useNavigation();

  const [step, setStep] = useState(1);

  const handleNextStep = () => setStep(state => state + 1);
  const handlePreviousStep = () => setStep(state => state - 1);

  const handleSubmitForm: SubmitHandler<SignUpFormData> = async value => {
    console.log({ value });
  };

  const handleGoBack = () => navigation.goBack();

  return (
    <Auth
      title="Crie sua conta"
      description="Faça seu cadastro de forma rápida e fácil."
      submitText={step === 1 ? 'Próximo' : 'Cadastrar'}
      onSubmit={step === 1 ? handleNextStep : handleSubmit(handleSubmitForm)}
      onGoBack={step === 1 ? handleGoBack : handlePreviousStep}
    >
      <Text>{step}. Dados</Text>

      {step === 1 ? (
        <>
          <Input
            control={control}
            name="user"
            placeholder="Nome"
            icon={User}
            error={formState.errors.user}
            autoCapitalize="words"
          />

          <Input
            control={control}
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
            control={control}
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
          <Input
            control={control}
            name="password"
            placeholder="Senha"
            icon={Lock}
            error={formState.errors.password}
            isSecureField
          />

          <Input
            control={control}
            name="password_confirmation"
            placeholder="Repetir senha"
            icon={Lock}
            error={formState.errors.password}
            isSecureField
            marginTop={8}
          />
        </>
      )}
    </Auth>
  );
};
