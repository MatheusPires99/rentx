import React, { useState, useCallback } from 'react';

import { useFormContext } from 'react-hook-form';

import { Email, Lock } from '../../../assets/icons';
import { Checkbox, Input } from '../../atoms';
import * as S from './styles';

export const SignInFields = () => {
  const { formState } = useFormContext();

  const [isChecked, setIsChecked] = useState(false);

  const handleToggleCheck = useCallback(
    () => setIsChecked(state => !state),
    [],
  );

  return (
    <>
      <Input
        name="email"
        placeholder="E-mail"
        icon={Email}
        error={formState.errors.email}
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <Input
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
    </>
  );
};
