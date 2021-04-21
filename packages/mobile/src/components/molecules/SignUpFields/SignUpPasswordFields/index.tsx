import React from 'react';

import { useFormContext } from 'react-hook-form';

import { Lock } from '../../../../assets/icons';
import { Input } from '../../../atoms';
import * as S from '../styles';

export const SignUpPasswordFields = () => {
  const { formState } = useFormContext();

  return (
    <S.Container>
      <S.StepTitle>2. Senha</S.StepTitle>

      <Input
        name="password"
        placeholder="Senha"
        icon={Lock}
        error={formState.errors.password}
        isSecureField
      />

      <Input
        name="password_confirmation"
        placeholder="Repetir senha"
        icon={Lock}
        error={formState.errors.password_confirmation}
        isSecureField
        marginTop={8}
      />
    </S.Container>
  );
};
