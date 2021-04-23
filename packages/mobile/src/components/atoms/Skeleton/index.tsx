import React from 'react';

import SkeletonContent from 'react-native-skeleton-content';
import { ISkeletonContentProps } from 'react-native-skeleton-content/lib/Constants';
import { useTheme } from 'styled-components';

export const Skeleton = ({ ...props }: ISkeletonContentProps) => {
  const theme = useTheme();

  return (
    <SkeletonContent
      containerStyle={{ flex: 1, width: '100%' }}
      boneColor={theme.colors.gray['200']}
      highlightColor={theme.colors.gray['100']}
      {...props}
    />
  );
};
