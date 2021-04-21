import React, { ReactNode } from 'react';
import { View } from 'react-native';

import { FormProvider } from 'react-hook-form';

import { Button } from '../../atoms';
import * as S from './styles';

export type AuthFormProps = {
  title: string;
  description: string;
  submitText: string;
  onSubmit: () => void;
  isLoading?: boolean;
  children: ReactNode;
};

export const AuthForm = ({
  title,
  description,
  submitText,
  onSubmit,
  isLoading,
  children,
}: AuthFormProps) => {
  return (
    <S.Container>
      <S.Content>
        <View>
          <S.Title>{title}</S.Title>

          <S.Description>{description}</S.Description>
        </View>

        <S.Form>
          {children}

          <Button
            onPress={onSubmit}
            isLoading={isLoading}
            style={{ marginTop: 24 }}
          >
            {submitText}
          </Button>
        </S.Form>
      </S.Content>
    </S.Container>
  );
};
