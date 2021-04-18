import React, { useState, useCallback } from 'react';
import { View } from 'react-native';

import { Email, Lock } from '../../assets/icons';
import { Checkbox, Input } from '../../components/atoms';

export const SignIn = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleCheck = useCallback(
    () => setIsChecked(state => !state),
    [],
  );

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
      <Checkbox
        isChecked={isChecked}
        onChange={handleToggleCheck}
        label="Lembrar-me"
      />
    </View>
  );
};
