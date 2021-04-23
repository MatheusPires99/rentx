import { Dimensions } from 'react-native';

import { Car } from '../types';

const { height } = Dimensions.get('screen');

export const IPHONE_8_HEIGHT = height === 667;

export const STORAGE_KEY = '@RentX';

export const CARS = [
  {
    id: 1,
    name: 'RS 5 Coupé',
    brand: 'AUDI',
    valuePerDay: 120,
    fuel: 'eletric',
    image: '../../../assets/audi.png',
  },
  {
    id: 2,
    name: 'RS 5 Coupé',
    brand: 'AUDI',
    valuePerDay: 120,
    fuel: 'eletric',
    image: '../../../assets/audi.png',
  },
  {
    id: 3,
    name: 'RS 5 Coupé',
    brand: 'AUDI',
    valuePerDay: 120,
    fuel: 'eletric',
    image: '../../../assets/audi.png',
  },
  {
    id: 4,
    name: 'RS 5 Coupé',
    brand: 'AUDI',
    valuePerDay: 120,
    fuel: 'eletric',
    image: '../../../assets/audi.png',
  },
] as Car[];
