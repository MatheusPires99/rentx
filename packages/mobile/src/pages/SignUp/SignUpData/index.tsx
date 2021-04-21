import React, { useCallback } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/core';
import { FormProvider, useForm } from 'react-hook-form';

import { SIGN_UP_DATA_FORM_SCHEMA } from '../../../schemas';
import { SignUpDataFields } from '../../../components/molecules';
import { AuthTemplate } from '../../../components/templates';

export const SignUpData = () => {
  const navigation = useNavigation();
  const methods = useForm({
    resolver: yupResolver(SIGN_UP_DATA_FORM_SCHEMA),
  });
  const { formState, trigger } = methods;

  const handleNextStep = useCallback(async () => {
    await trigger(['name', 'email', 'cnh']);

    const hasError =
      !!formState.errors.name ||
      !!formState.errors.email ||
      !!formState.errors.cnh;

    if (!hasError) {
      navigation.navigate('SignUpPassword');
    }
  }, [trigger, navigation, formState.errors]);

  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);

  return (
    <FormProvider {...methods}>
      <AuthTemplate
        title="Crie sua conta"
        description="Faça seu cadastro de forma rápida e fácil."
        submitText="Próximo"
        onSubmit={handleNextStep}
        onGoBack={handleGoBack}
        step={1}
      >
        <SignUpDataFields />
      </AuthTemplate>
    </FormProvider>
  );
};
