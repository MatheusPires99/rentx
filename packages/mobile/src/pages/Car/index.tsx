import React from 'react';

import { useRoute } from '@react-navigation/core';

import { Car as CarType } from '../../types';
import { CarTemplate } from '../../components/templates';

type RouteParams = {
  car: CarType;
};

export const Car = () => {
  const route = useRoute();

  const { car } = route.params as RouteParams;

  return <CarTemplate car={car} />;
};
