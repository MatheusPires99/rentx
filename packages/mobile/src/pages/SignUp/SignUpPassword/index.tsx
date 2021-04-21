import React, { useCallback } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation, useRoute } from '@react-navigation/core';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { SIGN_UP_PASSWORD_FORM_SCHEMA } from '../../../schemas';
import { SignUpPasswordFields } from '../../../components/molecules';
import { AuthTemplate } from '../../../components/templates';
import { useAuth } from '../../../hooks';
import {
  SignUpDataCredencials,
  SignUpPasswordCredencials,
} from '../../../types';

type RouteParams = {
  data: SignUpDataCredencials;
};

export const SignUpPassword = () => {
  const { signUp } = useAuth();
  const route = useRoute();
  const navigation = useNavigation();
  const methods = useForm({
    resolver: yupResolver(SIGN_UP_PASSWORD_FORM_SCHEMA),
  });
  const { handleSubmit, formState } = methods;

  const routeParams = route.params as RouteParams;

  const handleSubmitForm: SubmitHandler<SignUpPasswordCredencials> = async value => {
    await signUp({
      ...routeParams.data,
      ...value,
    });
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
        isLoading={formState.isSubmitting}
      >
        <SignUpPasswordFields />
      </AuthTemplate>
    </FormProvider>
  );
};
