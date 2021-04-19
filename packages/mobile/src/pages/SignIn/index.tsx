import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/core';
import { SubmitHandler, useForm } from 'react-hook-form';

import { SIGN_IN_FORM_SCHEMA } from '../../schemas';
import { SignInFields } from '../../components/molecules';
import { AuthTemplate } from '../../components/templates';

type SignInFormData = {
  email: string;
  passowrd: string;
};

export const SignIn = () => {
  const { handleSubmit, control, formState } = useForm({
    resolver: yupResolver(SIGN_IN_FORM_SCHEMA),
  });
  const navigation = useNavigation();

  const handleSubmitForm: SubmitHandler<SignInFormData> = async value => {
    console.log({ value });
  };

  const handleGoBack = () => navigation.goBack();

  return (
    <AuthTemplate
      title="Estamos quase lá."
      description="Faça seu login para começar uma experiência incrível."
      submitText="Login"
      onSubmit={handleSubmit(handleSubmitForm)}
      onGoBack={handleGoBack}
    >
      <SignInFields control={control} errors={formState.errors} />
    </AuthTemplate>
  );
};
