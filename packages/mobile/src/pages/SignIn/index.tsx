import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/core';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { SIGN_IN_FORM_SCHEMA } from '../../schemas';
import { SignInFields } from '../../components/molecules';
import { AuthTemplate } from '../../components/templates';
import { SignInCredencials } from '../../types';
import { useAuth } from '../../hooks';

export const SignIn = () => {
  const navigation = useNavigation();
  const methods = useForm({
    resolver: yupResolver(SIGN_IN_FORM_SCHEMA),
  });
  const { handleSubmit } = methods;

  const { signIn } = useAuth();

  const handleSubmitForm: SubmitHandler<SignInCredencials> = async value => {
    await signIn(value);
  };

  const handleGoBack = () => navigation.goBack();

  return (
    <FormProvider {...methods}>
      <AuthTemplate
        title="Estamos quase lá."
        description="Faça seu login para começar uma experiência incrível."
        submitText="Login"
        onSubmit={handleSubmit(handleSubmitForm)}
        onGoBack={handleGoBack}
      >
        <SignInFields />
      </AuthTemplate>
    </FormProvider>
  );
};
