import React from 'react';

import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

import { SvgProps } from '.';

export const Energy = ({ color, size }: SvgProps) => (
  <Svg
    width={size || '24'}
    height={size || '24'}
    viewBox={`0 0 ${size || '24'} ${size || '24'}`}
    fill="none"
  >
    <G clip-path="url(#clip0)">
      <Path
        scale={size && size / 24}
        d="M12.5263 8H22L10.4211 25V16H2L12.5263 -1V8ZM10.4211 10V6.22L5.7179 14H12.5263V18.394L18.0663 10H10.4211Z"
        fill={color || '#AEAEB3'}
      />
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
