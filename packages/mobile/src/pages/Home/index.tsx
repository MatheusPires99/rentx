import React from 'react';
import { View } from 'react-native';

import { useAuth } from '../../hooks';
import { Button } from '../../components/atoms';

export const Home = () => {
  const { signOut } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button onPress={signOut} style={{ width: '100%' }}>
        SignOut
      </Button>
    </View>
  );
};
