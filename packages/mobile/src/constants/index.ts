import { Dimensions } from 'react-native';

const { height } = Dimensions.get('screen');

export const IPHONE_8_HEIGHT = height === 667;

export const STORAGE_KEY = '@RentX';

export const TAB_BAR_HEIGHT = IPHONE_8_HEIGHT ? 64 : 84;
