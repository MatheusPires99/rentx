import React from 'react';

import { ProfileTemplate } from '../../components/templates';
import { getCars } from '../../services/cars';

export const Profile = () => {
  const { data: cars, isLoading } = getCars();

  return <ProfileTemplate cars={cars} />;
};
