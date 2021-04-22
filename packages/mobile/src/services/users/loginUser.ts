import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '..';

import { LoginResponse } from '../../types';
import { STORAGE_KEY } from '../../constants';
import { getUser } from './getUser';

export const loginUser = async (email: string, password: string) => {
  const response = await api.post<LoginResponse>('/login', {
    email,
    password,
  });

  const { accessToken } = response.data;

  const user = await getUser(email);

  await AsyncStorage.multiSet([
    [`${STORAGE_KEY}:accessToken`, accessToken],
    [`${STORAGE_KEY}:user`, JSON.stringify(user)],
  ]);

  return {
    accessToken,
    user,
  };
};
