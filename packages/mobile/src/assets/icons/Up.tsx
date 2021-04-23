import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '.';

export const Up = ({ color, size }: SvgProps) => (
  <Svg
    width={size || '24'}
    height={size || '24'}
    viewBox={`0 0 ${size || '24'} ${size || '24'}`}
    fill="none"
  >
    <Path
      scale={size && size / 24}
      d="M3 20.4474H21V22.5H3V20.4474ZM13 5.42874V16.8947H11V5.42874L4.929 11.6605L3.515 10.2093L12 1.5L20.485 10.2083L19.071 11.6595L13 5.43079V5.42874Z"
      fill={color || '#7A7A80'}
    />
  </Svg>
);
