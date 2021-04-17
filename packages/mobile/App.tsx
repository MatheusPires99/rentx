import 'react-native-gesture-handler';

import React from 'react';
import { View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import fonts from './src/assets/fonts';
import { theme } from './src/styles';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({ ...fonts });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <Routes />
        </View>
      </NavigationContainer>
    </ThemeProvider>
  );
}
