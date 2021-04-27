import React from 'react';
import { View } from 'react-native';

import { Button } from '../../components/atoms';
import { useAuth } from '../../hooks';

export const Profile = () => {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={signOut}>Logout</Button>
    </View>
  );
};
