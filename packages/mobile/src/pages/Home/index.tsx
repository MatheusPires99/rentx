import React from 'react';

import { HomeTemplate } from '../../components/templates';
import { getCars } from '../../services/cars';

export const Home = () => {
  const { data: cars, isLoading } = getCars();

  return <HomeTemplate cars={cars} isLoading={isLoading} />;
};
