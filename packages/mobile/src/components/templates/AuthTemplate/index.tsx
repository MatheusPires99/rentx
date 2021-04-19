import React, { ReactNode } from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';

import { AuthHeader } from '../../molecules';
import { AuthForm } from '../../organisms';

export type AuthTemplateProps = {
  title: string;
  description: string;
  submitText: string;
  onSubmit: () => void;
  onGoBack: () => void;
  children: ReactNode;
};

export const AuthTemplate = ({
  title,
  description,
  submitText,
  onSubmit,
  onGoBack,
  children,
}: AuthTemplateProps) => {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#fff" />

      <KeyboardAvoidingView
        style={{ flex: 1, position: 'relative' }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <AuthHeader onGoBack={onGoBack} />

        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <AuthForm
            title={title}
            description={description}
            submitText={submitText}
            onSubmit={onSubmit}
          >
            {children}
          </AuthForm>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};
