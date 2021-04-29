import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '.';

export const Rentx = ({ color, size }: SvgProps) => (
  <Svg
    width={size || '80'}
    height={size || '50'}
    viewBox={`0 0 ${size || '80'} ${size || '50'}`}
    fill="none"
  >
    <Path
      scale={size && size / 80}
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.840557 0.408832L30.3732 14.9428L19.6476 20.2269L0 10.5581V0L0.840557 0.408832ZM79.9996 39.3708V49.9289L49.7053 35.027L60.4221 29.7429L79.9996 39.3708ZM80 10.568V0.00991817L79.1682 0.408528L40.0394 19.6951H40.0306L29.3138 24.9895L0 39.4314V49.9997L40.0394 30.2634L50.7563 24.9793L80 10.568Z"
      fill={color || '#DC1637'}
    />
  </Svg>
);
