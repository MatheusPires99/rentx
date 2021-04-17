import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
  Archivo_700Bold,
  useFonts,
} from '@expo-google-fonts/archivo';

import { ThemeProvider } from 'styled-components';

import theme from './src/styles/theme';
import { Onboarding } from './src/pages/Onboarding';

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Archivo_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Onboarding />
    </ThemeProvider>
  );
}
