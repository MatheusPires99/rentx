import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components';

import { Home } from '../pages/Home';

const App = createStackNavigator();

export const AppRoutes = () => {
  const theme = useTheme();

  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: theme.colors.gray['50'] },
      }}
    >
      <App.Screen name="Home" component={Home} />
    </App.Navigator>
  );
};
