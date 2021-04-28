import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { RightArrow } from '../../../../assets/icons';
import { useCalendar } from '../../../../hooks';
import * as S from './styles';
import { formatDate } from '../../../../utils';

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
        <S.SubText>DE</S.SubText>
        <S.DateWrap hasDate={!!formattedFromDate}>
          <S.Date>{formattedFromDate || ''}</S.Date>
        </S.DateWrap>
      </S.Content>

      <View style={{ marginHorizontal: 32 }}>
        <RightArrow />
      </View>

      <S.Content>
        <S.SubText>ATÉ</S.SubText>
        <S.DateWrap hasDate={!!formattedToDate}>
          <S.Date>{formattedToDate || ''}</S.Date>
        </S.DateWrap>
      </S.Content>
    </S.Container>
  );
};
