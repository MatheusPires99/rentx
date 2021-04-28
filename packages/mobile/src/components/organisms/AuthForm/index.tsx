import React, { ReactNode } from 'react';
import { View } from 'react-native';

import { Button, Text } from '../../atoms';
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
          <Text
            fontFamily="archivo.semiBold"
            fontSize="3xl"
            style={{ width: 170, marginBottom: 24 }}
          >
            {title}
          </Text>

          <Text color="gray.400" style={{ width: 204, lineHeight: 25 }}>
            {description}
          </Text>
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
