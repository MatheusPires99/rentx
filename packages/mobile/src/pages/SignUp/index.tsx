import React, { useState, useCallback } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/core';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { SIGN_IN_FORM_SCHEMA } from '../../schemas';
import { SignUpFields } from '../../components/molecules';
import { AuthTemplate } from '../../components/templates';

type SignUpFormData = {
  email: string;
  passowrd: string;
};

export const SignUp = () => {
  const methods = useForm({
    resolver: yupResolver(SIGN_IN_FORM_SCHEMA),
  });
  const navigation = useNavigation();

  const [step, setStep] = useState(1);

  const handleNextStep = useCallback(() => setStep(state => state + 1), []);
  const handlePreviousStep = useCallback(() => setStep(state => state - 1), []);

  const handleSubmitForm: SubmitHandler<SignUpFormData> = async value => {
    console.log({ value });
  };

  const handleGoBack = () => navigation.goBack();

  return (
    <FormProvider {...methods}>
      <AuthTemplate
        title="Crie sua conta"
        description="Faça seu cadastro de forma rápida e fácil."
        submitText={step === 1 ? 'Próximo' : 'Cadastrar'}
        onSubmit={
          step === 1 ? handleNextStep : methods.handleSubmit(handleSubmitForm)
        }
        onGoBack={step === 1 ? handleGoBack : handlePreviousStep}
        step={step}
      >
        <SignUpFields step={step} />
      </AuthTemplate>
    </FormProvider>
  );
};
