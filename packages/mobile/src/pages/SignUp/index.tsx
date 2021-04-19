import React, { useState, useCallback } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/core';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { SIGN_UP_FORM_SCHEMA } from '../../schemas';
import { SignUpFields } from '../../components/molecules';
import { AuthTemplate } from '../../components/templates';

type SignUpFormData = {
  name: string;
  email: string;
  cnh: string;
  passowrd: string;
  password_confirmation: string;
};

export const SignUp = () => {
  const navigation = useNavigation();
  const methods = useForm({
    resolver: yupResolver(SIGN_UP_FORM_SCHEMA),
  });
  const { handleSubmit, trigger, formState } = methods;

  const [step, setStep] = useState(1);

  const handleNextStep = useCallback(async () => {
    await trigger(['name', 'email', 'cnh']);

    const hasError =
      !!formState.errors.name ||
      !!formState.errors.email ||
      !!formState.errors.cnh;

    if (!hasError) {
      setStep(state => state + 1);
    }
  }, [trigger, formState.errors]);

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
        onSubmit={step === 1 ? handleNextStep : handleSubmit(handleSubmitForm)}
        onGoBack={step === 1 ? handleGoBack : handlePreviousStep}
        step={step}
      >
        <SignUpFields step={step} />
      </AuthTemplate>
    </FormProvider>
  );
};
