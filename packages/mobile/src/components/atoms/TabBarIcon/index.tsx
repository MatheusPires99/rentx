import React from 'react';

import { useTheme } from 'styled-components';

import { IconType } from '../../../types';
import * as S from './styles';

type TabBarIconProps = {
  icon: IconType;
  focused: boolean;
};

export const TabBarIcon = ({ icon: Icon, focused }: TabBarIconProps) => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.Icon focused={focused}>
        <Icon
          color={focused ? theme.colors.primary : theme.colors['gray.300']}
        />
      </S.Icon>

      {focused && <S.Square focused={focused} />}
    </S.Container>
  );
};
