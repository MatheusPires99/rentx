import React from 'react';

import { Control, DeepMap, FieldError, FieldValues } from 'react-hook-form';

import { Car, Email, Lock, User } from '../../../assets/icons';
import { Input } from '../../atoms';

type SignUpFieldsProps = {
  step: number;
  control: Control<FieldValues>;
  errors: DeepMap<FieldValues, FieldError>;
};

export const SignUpFields = ({ step, control, errors }: SignUpFieldsProps) => {
  return (
    <>
      {step === 1 ? (
        <>
          <Input
            control={control}
            name="user"
            placeholder="Nome"
            icon={User}
            error={errors.user}
            autoCapitalize="words"
          />

          <Input
            control={control}
            name="email"
            placeholder="E-mail"
            icon={Email}
            error={errors.email}
            marginTop={8}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <Input
            control={control}
            name="cnh"
            placeholder="CNH"
            icon={Car}
            error={errors.cnh}
            marginTop={8}
            keyboardType="numeric"
          />
        </>
      ) : (
        <>
          <Input
            control={control}
            name="password"
            placeholder="Senha"
            icon={Lock}
            error={errors.password}
            isSecureField
          />

          <Input
            control={control}
            name="password_confirmation"
            placeholder="Repetir senha"
            icon={Lock}
            error={errors.password}
            isSecureField
            marginTop={8}
          />
        </>
      )}
    </>
  );
};
