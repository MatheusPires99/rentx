import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '.';

export const ChevronRight = ({ color }: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M13.172 12L8.22198 7.04999L9.63598 5.63599L16 12L9.63598 18.364L8.22198 16.95L13.172 12Z"
      fill={color || '#7A7A80'}
    />
  </Svg>
);
