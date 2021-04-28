import React, { useState } from 'react';
import { View } from 'react-native';

import { useTheme } from 'styled-components';

import { Skeleton } from '../../../atoms';

export const Loading = () => {
  const theme = useTheme();

  const [items] = useState(Array.from(Array(1).keys()));

  const layout = items.map(() => ({
    width: 100,
    height: 18,
  }));

  return (
    <View>
      <Skeleton
        isLoading
        layout={layout}
        boneColor={theme.colors['gray.800']}
        highlightColor={theme.colors['gray.600']}
      />
    </View>
  );
};
