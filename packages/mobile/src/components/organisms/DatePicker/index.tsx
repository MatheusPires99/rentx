import React from 'react';

import { useCalendar } from '../../../hooks';
import { Button, Calendar } from '../../atoms';
import { DateRange } from './DateRange';
import * as S from './styles';

type DatePickerProps = {
  title: string;
  onConfirm?: () => void;
};

export const DatePicker = ({ title, onConfirm }: DatePickerProps) => {
  const { handleDateChange } = useCalendar();

  return (
    <S.Container>
      <S.Header>
        <S.Title>{title}</S.Title>

        <DateRange />
      </S.Header>

      <S.Content>
        <Calendar onChange={({ start, end }) => handleDateChange(start, end)} />
      </S.Content>

      <S.ButtonContainer>
        <Button onPress={onConfirm}>Confirmar</Button>
      </S.ButtonContainer>
    </S.Container>
  );
};
