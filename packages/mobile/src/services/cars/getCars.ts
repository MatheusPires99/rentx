import { useQuery } from 'react-query';

import { Car } from '../../types';
import { api } from '../api';

async function fetchCars(): Promise<Car[]> {
  const { data: cars } = await api.get('cars');

  return cars;
}

export function getCars() {
  return useQuery('cars', fetchCars, {
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}
