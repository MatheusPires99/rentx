import React from 'react';

import { Text } from '../../../atoms';
import * as S from './styles';

export const CarListHeader = () => {
  return (
    <S.Container>
      <Text color="gray.400">Agendamentos feitos</Text>
      <Text fontFamily="archivo.medium">05</Text>
    </S.Container>
  );
};
