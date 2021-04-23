import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '.';

export const GearShift = ({ color, size }: SvgProps) => (
  <Svg
    width={size || '24'}
    height={size || '24'}
    viewBox={`0 0 ${size || '24'} ${size || '24'}`}
    fill="none"
  >
    <Path
      scale={size && size / 24}
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.64285 1.50005L4.5 1.50005L4.5 13.0835L4.50001 13.0835L4.50001 22.5001L6.64287 22.5001L6.64287 13.0835L10.9286 13.0835L10.9286 22.5001L13.0714 22.5001L13.0714 13.0835L19.5 13.0835L19.5 13.0833L19.5 13.0833L19.5 10.9166L19.5 10.9166L19.5 1.50005L17.3571 1.50005L17.3571 10.9166L13.0714 10.9166L13.0714 1.50005L10.9286 1.50005L10.9286 10.9166L6.64285 10.9166L6.64285 1.50005Z"
      fill={color || '#7A7A80'}
    />
  </Svg>
);
