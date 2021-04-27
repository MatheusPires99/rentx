/* eslint-disable import/no-duplicates */
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { RightArrow } from '../../../../assets/icons';
import { useCalendar } from '../../../../hooks';
import * as S from './styles';

export const DateRange = () => {
  const { startDate, endDate } = useCalendar();

  const [formattedFromDate, setFormattedFromDate] = useState('');
  const [formattedToDate, setFormattedToDate] = useState('');

  useEffect(() => {
    if (startDate) {
      setFormattedFromDate(format(startDate, 'dd MMMM yyyy', { locale: ptBR }));
    }

    if (endDate) {
      setFormattedToDate(format(endDate, 'dd MMMM yyyy', { locale: ptBR }));
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
