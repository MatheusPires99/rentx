import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '.';

export const ChevronLeft = ({ color }: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M10.828 12L15.778 16.95L14.364 18.364L8.00001 12L14.364 5.63601L15.778 7.05001L10.828 12Z"
      fill={color || '#7A7A80'}
    />
  </Svg>
);
