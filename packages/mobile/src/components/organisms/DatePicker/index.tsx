import React from 'react';

import { useCalendar } from '../../../hooks';
import { Button, Calendar, Text } from '../../atoms';
import { DateRange } from './DateRange';
import * as S from './styles';

type DatePickerProps = {
  title: string;
  onConfirm?: () => void;
};

export const DatePicker = ({ title, onConfirm }: DatePickerProps) => {
  const { startDate, endDate, handleDateChange } = useCalendar();

  return (
    <S.Container>
      <S.Header>
        <Text
          fontFamily="archivo.semiBold"
          fontSize="2xl"
          color="white"
          style={{ width: 212, lineHeight: 34 }}
        >
          {title}
        </Text>

        <DateRange />
      </S.Header>

      <S.Content>
        <Calendar onChange={({ start, end }) => handleDateChange(start, end)} />
      </S.Content>

      <S.ButtonContainer>
        <Button onPress={onConfirm} disabled={!startDate || !endDate}>
          Confirmar
        </Button>
      </S.ButtonContainer>
    </S.Container>
  );
};
