import React, { useState, useCallback } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/core';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import {
  SIGN_UP_DATA_FORM_SCHEMA,
  SIGN_UP_PASSWORD_FORM_SCHEMA,
} from '../../schemas';
import { SignUpFields } from '../../components/molecules';
import { AuthTemplate } from '../../components/templates';
import { useAuth } from '../../hooks';
import { SignUpCredencials, SignUpStep } from '../../types';

export const SignUp = () => {
  const [step, setStep] = useState(SignUpStep.Data);

  const navigation = useNavigation();
  const methods = useForm({
    resolver: yupResolver(
      step === SignUpStep.Data
        ? SIGN_UP_DATA_FORM_SCHEMA
        : SIGN_UP_PASSWORD_FORM_SCHEMA,
    ),
  });
  const { handleSubmit } = methods;

  const { signUp } = useAuth();

  const handleNextStep = useCallback(() => setStep(SignUpStep.Password), []);
  const handlePreviousStep = useCallback(() => setStep(SignUpStep.Data), []);

  const handleSubmitForm: SubmitHandler<SignUpCredencials> = useCallback(
    async value => {
      await signUp(value);
    },
    [signUp],
  );

  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);

  return (
    <FormProvider {...methods}>
      <AuthTemplate
        title="Crie sua conta"
        description="Faça seu cadastro de forma rápida e fácil."
        submitText={step === SignUpStep.Data ? 'Próximo' : 'Cadastrar'}
        onSubmit={
          step === SignUpStep.Data
            ? handleSubmit(handleNextStep)
            : handleSubmit(handleSubmitForm)
        }
        onGoBack={step === SignUpStep.Data ? handleGoBack : handlePreviousStep}
        step={step}
      >
        <SignUpFields step={step} />
      </AuthTemplate>
    </FormProvider>
  );
};
