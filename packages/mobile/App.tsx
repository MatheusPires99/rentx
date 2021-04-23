import 'react-native-gesture-handler';

import React from 'react';
import { View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import fonts from './src/assets/fonts';
import { theme } from './src/styles';
import { Routes } from './src/routes';
import { AuthProvider } from './src/hooks';
import { queryClient } from './src/services';

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <View style={{ flex: 1 }}>
              <Routes />
            </View>
          </NavigationContainer>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
