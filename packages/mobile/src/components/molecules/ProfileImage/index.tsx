import React, { useEffect } from 'react';
import { Alert, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { useAuth } from '../../../hooks';
import * as S from './styles';

export const ProfileImage = () => {
  const { updateUser } = useAuth();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert(
            'Desculpa, precisamos de permissões para acessar sua galeria para fazer isso funcionar!',
          );
        }
      }
    })();
  }, []);

  const handleUpdateUserImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Desculpa, precisamos de permissões para acessar sua galeria para fazer isso funcionar!',
      );
    }

    const response = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (response.cancelled) return;

    console.log({ image: response.uri });
  };

  return (
    <S.Container>
      <S.Image source={{ uri: 'https://github.com/MatheusPires99.png' }} />
    </S.Container>
  );
};
