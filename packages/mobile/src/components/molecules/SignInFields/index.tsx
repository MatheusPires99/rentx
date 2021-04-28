import React, { useState, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';

import { useFormContext } from 'react-hook-form';

import { Email, Lock } from '../../../assets/icons';
import { Checkbox, Input, Text } from '../../atoms';
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

        <TouchableOpacity>
          <Text fontSize="sm" color="gray.400">
            Esqueci minha senha
          </Text>
        </TouchableOpacity>
      </S.Box>
    </>
  );
};
