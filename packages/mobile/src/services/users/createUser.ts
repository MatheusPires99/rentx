import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '..';

import { LoginResponse } from '../../types';
import { STORAGE_KEY } from '../../constants';
import { getUser } from './getUser';

export const createUser = async (
  name: string,
  email: string,
  cnh: string,
  password: string,
) => {
  const response = await api.post<LoginResponse>('/users', {
    name,
    email,
    cnh,
    password,
  });

  const user = await getUser(email);

  const { accessToken } = response.data;

  await AsyncStorage.multiSet([
    [`${STORAGE_KEY}:accessToken`, accessToken],
    [`${STORAGE_KEY}:user`, JSON.stringify(user)],
  ]);

  return {
    accessToken,
    user,
  };
};
