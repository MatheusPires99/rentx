import React, { useState, useCallback } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { SIGN_IN_FORM_SCHEMA } from '../../../schemas';
import { Email, Lock } from '../../../assets/icons';
import { Checkbox, Input } from '../../atoms';
import { Auth } from '../../molecules';
import * as S from './styles';

type SignInFormData = {
  email: string;
  passowrd: string;
};

export const SignIn = () => {
  const { handleSubmit, control, formState } = useForm({
    resolver: yupResolver(SIGN_IN_FORM_SCHEMA),
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleToggleCheck = useCallback(
    () => setIsChecked(state => !state),
    [],
  );

  const handleSubmitForm: SubmitHandler<SignInFormData> = async value => {
    console.log({ value });
  };

  return (
    <Auth
      title="Estamos quase lá."
      description="Faça seu login para começar uma experiência incrível."
      submitText="Login"
      handleSubmit={handleSubmit(handleSubmitForm)}
    >
      <Input
        control={control}
        name="email"
        placeholder="E-mail"
        icon={Email}
        error={formState.errors.email}
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <Input
        control={control}
        name="password"
        placeholder="Senha"
        icon={Lock}
        error={formState.errors.password}
        isSecureField
        marginTop={8}
      />

      <S.Box>
        <Checkbox
          isChecked={isChecked}
          onChange={handleToggleCheck}
          label="Lembrar-me"
        />

        <S.ForgotPasswordButton>
          <S.ForgotPasswordButtonText>
            Esqueci minha senha
          </S.ForgotPasswordButtonText>
        </S.ForgotPasswordButton>
      </S.Box>
    </Auth>
  );
};
