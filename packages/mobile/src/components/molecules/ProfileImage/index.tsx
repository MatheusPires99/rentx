import React, { useState, useEffect } from 'react';
import { Alert, Button, Image, Platform, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { useAuth } from '../../../hooks';

export const ProfileImage = () => {
  const { updateUser } = useAuth();

  const [image, setImage] = useState(null);

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

    if (!response.cancelled) {
      console.log({ image: response.uri });

      // updateUser({
      //   image: response.uri,
      // });
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Pick an image from camera roll"
        onPress={handleUpdateUserImage}
      />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
};
