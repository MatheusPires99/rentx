import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '..';

import { User, UserResponse } from '../../types';
import { STORAGE_KEY } from '../../constants';

export const updateUser = async (id: number, userParam: User) => {
  const response = await api.put<UserResponse>(`/users/${id}`, userParam);

  const { data: user } = response;

  await AsyncStorage.setItem(`${STORAGE_KEY}:user`, JSON.stringify(user));

  return {
    user,
  };
};
