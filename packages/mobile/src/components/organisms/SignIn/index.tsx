import React, { useState, useCallback } from 'react';

import { Email, Lock } from '../../../assets/icons';
import { Checkbox, Input } from '../../atoms';
import { Auth } from '../../molecules';
import * as S from './styles';

export const SignIn = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleCheck = useCallback(
    () => setIsChecked(state => !state),
    [],
  );

  return (
    <Auth
      title="Estamos quase lá."
      description="Faça seu login para começar uma experiência incrível."
      submitText="Login"
      handleSubmit={() => {}}
    >
      <Input
        name="email"
        placeholder="E-mail"
        icon={Email}
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <Input
        name="password"
        placeholder="Senha"
        icon={Lock}
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
