import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '.';

export const RightArrow = ({ color }: SvgProps) => (
  <Svg width="48" height="10" viewBox="0 0 48 10" fill="none">
    <Path
      d="M45.5118 4.35716L42.0252 0.908974L42.9443 0L48 5L42.9443 10L42.0252 9.09103L45.5118 5.64284H0V4.35716L45.5118 4.35716Z"
      fill={color || '#7A7A80'}
    />
  </Svg>
);
