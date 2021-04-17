import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components';

import { Onboarding } from '../pages/Onboarding';

const Auth = createStackNavigator();

export const AuthRoutes = () => {
  const theme = useTheme();

  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: theme.colors.white },
      }}
    >
      <Auth.Screen name="Onboarding" component={Onboarding} />
    </Auth.Navigator>
  );
};
