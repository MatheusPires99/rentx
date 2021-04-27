import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ChevronLeft, ChevronRight } from '../../../assets/icons';
import * as S from './styles';

type ArrowButtonProps = Omit<TouchableOpacityProps, 'style'> & {
  direction: 'right' | 'left';
  color?: string | undefined;
};

export const ArrowButton = ({
  direction,
  color,
  ...rest
}: ArrowButtonProps) => {
  return (
    <S.Container {...rest}>
      {direction === 'right' && <ChevronRight color={color} />}
      {direction === 'left' && <ChevronLeft color={color} />}
    </S.Container>
  );
};
