import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ChevronLeft, ChevronRight } from '../../../assets/icons';
import * as S from './styles';

type ArrowButtonProps = Omit<TouchableOpacityProps, 'style'> & {
  direction: 'right' | 'left';
};

export const ArrowButton = ({ direction, ...rest }: ArrowButtonProps) => {
  return (
    <S.Container {...rest}>
      {direction === 'right' && <ChevronRight />}
      {direction === 'left' && <ChevronLeft />}
    </S.Container>
  );
};
