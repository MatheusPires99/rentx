import React, { ReactNode } from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, ScrollView, Platform, View } from 'react-native';

import { ArrowButton, Button } from '../../atoms';
import * as S from './styles';

export type AuthProps = {
  title: string;
  description: string;
  submitText: string;
  onSubmit: () => void;
  onGoBack: () => void;
  children: ReactNode;
};

export const Auth = ({
  title,
  description,
  submitText,
  onSubmit,
  onGoBack,
  children,
}: AuthProps) => {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#fff" />

      <KeyboardAvoidingView
        style={{ flex: 1, position: 'relative' }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <S.Header>
          <ArrowButton direction="left" onPress={onGoBack} />
        </S.Header>

        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <S.Container>
            <S.Content>
              <View>
                <S.Title>{title}</S.Title>

                <S.Description>{description}</S.Description>
              </View>

              <S.Form>
                {children}

                <Button onPress={onSubmit} style={{ marginTop: 24 }}>
                  {submitText}
                </Button>
              </S.Form>
            </S.Content>
          </S.Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};
