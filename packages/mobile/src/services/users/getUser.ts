import { api } from '..';

import { UserResponse } from '../../types';

export const getUser = async (params?: unknown) => {
  const response = await api.get<UserResponse[]>('/users', {
    params: {
      params,
    },
  });

  return response.data[0];
};
