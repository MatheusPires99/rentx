import React, { useState, useCallback } from 'react';

import { Control, DeepMap, FieldError, FieldValues } from 'react-hook-form';

import { Email, Lock } from '../../../assets/icons';
import { Checkbox, Input } from '../../atoms';
import * as S from './styles';

type SignInFieldsProps = {
  control: Control<FieldValues>;
  errors: DeepMap<FieldValues, FieldError>;
};

export const SignInFields = ({ control, errors }: SignInFieldsProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleCheck = useCallback(
    () => setIsChecked(state => !state),
    [],
  );

  return (
    <>
      <Input
        control={control}
        name="email"
        placeholder="E-mail"
        icon={Email}
        error={errors.email}
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <Input
        control={control}
        name="password"
        placeholder="Senha"
        icon={Lock}
        error={errors.password}
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
