import React from 'react';

import { BookDate } from '../../../types';
import { Calendar } from '../../atoms';
import { DateRange } from './DateRange';
import * as S from './styles';

type DatePickerProps = {
  title: string;
  bookDate: BookDate | undefined;
  onDateChange: (date: BookDate) => void;
};

export const DatePicker = ({
  title,
  bookDate,
  onDateChange,
}: DatePickerProps) => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>{title}</S.Title>

        <DateRange bookDate={bookDate} />
      </S.Header>

      <S.CalenderContainer>
        <Calendar onDateChange={onDateChange} />
      </S.CalenderContainer>
    </S.Container>
  );
};
