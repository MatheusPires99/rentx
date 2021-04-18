import React from 'react';
import { View } from 'react-native';

import { Email, Lock } from '../../assets/icons';
import { Input } from '../../components/atoms';

export const SignIn = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Input
        name="email"
        placeholder="E-mail"
        icon={Email}
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Input name="password" placeholder="Senha" icon={Lock} isSecureField />
    </View>
  );
};
