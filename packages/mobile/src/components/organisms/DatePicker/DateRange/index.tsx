import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { RightArrow } from '../../../../assets/icons';
import { useCalendar } from '../../../../hooks';
import { formatDate } from '../../../../utils';
import { Text } from '../../../atoms';
import * as S from './styles';

export const DateRange = () => {
  const { startDate, endDate } = useCalendar();

  const [formattedFromDate, setFormattedFromDate] = useState('');
  const [formattedToDate, setFormattedToDate] = useState('');

  useEffect(() => {
    if (startDate) {
      setFormattedFromDate(formatDate(startDate));
    }

    if (endDate) {
      setFormattedToDate(formatDate(endDate));
    }
  }, [startDate, endDate]);

  return (
    <S.Container>
      <S.Content>
        <Text
          fontFamily="archivo.medium"
          fontSize="xs"
          color="gray.400"
          style={{ marginBottom: 8 }}
        >
          DE
        </Text>
        <S.DateWrap hasDate={!!formattedFromDate}>
          <Text fontFamily="inter.medium" color="white">
            {formattedFromDate || ''}
          </Text>
        </S.DateWrap>
      </S.Content>

      <View style={{ marginHorizontal: 32 }}>
        <RightArrow />
      </View>

      <S.Content>
        <Text
          fontFamily="archivo.medium"
          fontSize="xs"
          color="gray.400"
          style={{ marginBottom: 8 }}
        >
          ATÉ
        </Text>
        <S.DateWrap hasDate={!!formattedToDate}>
          <Text fontFamily="inter.medium" color="white">
            {formattedToDate || ''}
          </Text>
        </S.DateWrap>
      </S.Content>
    </S.Container>
  );
};
