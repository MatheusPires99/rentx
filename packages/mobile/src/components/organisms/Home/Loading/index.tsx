import React, { useState } from 'react';
import { View } from 'react-native';

import { Skeleton } from '../../../atoms';

export const Loading = () => {
  const [items] = useState(Array.from(Array(4).keys()));

  const layout = items.map(() => ({
    width: '100%',
    height: 140,
    marginBottom: 16,
  }));

  return (
    <View style={{ padding: 16 }}>
      <Skeleton isLoading layout={layout} />
    </View>
  );
};
