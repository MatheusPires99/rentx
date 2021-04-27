/* eslint-disable import/no-duplicates */
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { RightArrow } from '../../../../assets/icons';
import { BookDate } from '../../../../types';
import * as S from './styles';

type DateRangeProps = {
  bookDate: BookDate | undefined;
};

export const DateRange = ({ bookDate }: DateRangeProps) => {
  const [formattedFromDate, setFormattedFromDate] = useState('');
  const [formattedToDate, setFormattedToDate] = useState('');

  useEffect(() => {
    if (bookDate?.start) {
      setFormattedFromDate(
        format(bookDate.start, 'dd MMMM yyyy', { locale: ptBR }),
      );
    }

    if (bookDate?.end) {
      setFormattedToDate(
        format(bookDate.end, 'dd MMMM yyyy', { locale: ptBR }),
      );
    }
  }, [bookDate]);

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
