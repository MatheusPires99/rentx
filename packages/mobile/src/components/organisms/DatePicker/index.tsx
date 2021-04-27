import React, { useState, useCallback } from 'react';

import { Calendar } from '../../atoms';
import { DateRange } from './DateRange';
import * as S from './styles';

type DatePickerProps = {
  title: string;
};

export const DatePicker = ({ title }: DatePickerProps) => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const handleDateChange = useCallback(
    (start: Date | undefined, end: Date | undefined) => {
      setStartDate(start);
      setEndDate(end);
    },
    [],
  );

  return (
    <S.Container>
      <S.Header>
        <S.Title>{title}</S.Title>

        <DateRange startDate={startDate} endDate={endDate} />
      </S.Header>

      <S.CalenderContainer>
        <Calendar onChange={({ start, end }) => handleDateChange(start, end)} />
      </S.CalenderContainer>
    </S.Container>
  );
};
