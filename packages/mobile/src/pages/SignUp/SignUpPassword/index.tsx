import React, { useCallback } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/core';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { SIGN_UP_PASSWORD_FORM_SCHEMA } from '../../../schemas';
import { SignUpPasswordFields } from '../../../components/molecules';
import { AuthTemplate } from '../../../components/templates';
import { useAuth } from '../../../hooks';
import { SignUpCredencials } from '../../../types';

export const SignUpPassword = () => {
  const navigation = useNavigation();
  const methods = useForm({
    resolver: yupResolver(SIGN_UP_PASSWORD_FORM_SCHEMA),
  });
  const { handleSubmit } = methods;

  const { signUp } = useAuth();

  const handleSubmitForm: SubmitHandler<SignUpCredencials> = async value => {
    await signUp(value);
  };

  const handleGoBack = useCallback(() => navigation.navigate('SignUpData'), [
    navigation,
  ]);

  return (
    <FormProvider {...methods}>
      <AuthTemplate
        title="Crie sua conta"
        description="Faça seu cadastro de forma rápida e fácil."
        submitText="Cadastrar"
        onSubmit={handleSubmit(handleSubmitForm)}
        onGoBack={handleGoBack}
        step={2}
      >
        <SignUpPasswordFields />
      </AuthTemplate>
    </FormProvider>
  );
};
