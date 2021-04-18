import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components';

import { Onboarding } from '../pages/Onboarding';
import { SignIn } from '../pages/SignIn';

const Auth = createStackNavigator();

export const AuthRoutes = () => {
  const theme = useTheme();

  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: theme.colors.gray['50'] },
      }}
    >
      <Auth.Screen name="Onboarding" component={Onboarding} />
      <Auth.Screen name="SignIn" component={SignIn} />
    </Auth.Navigator>
  );
};
