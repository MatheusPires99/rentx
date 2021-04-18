import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '.';

export const ChevronRight = ({ color, size }: SvgProps) => (
  <Svg
    width={size || '24'}
    height={size || '24'}
    viewBox={`0 0 ${size || '24'} ${size || '24'}`}
    fill="none"
  >
    <Path
      scale={size && size / 24}
      d="M13.172 12L8.22198 7.04999L9.63598 5.63599L16 12L9.63598 18.364L8.22198 16.95L13.172 12Z"
      fill={color || '#7A7A80'}
    />
  </Svg>
);
