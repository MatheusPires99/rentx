import React, { useCallback, useState } from 'react';

import {
  format,
  startOfMonth,
  addMonths,
  subMonths,
  isBefore,
  isAfter,
} from 'date-fns';

import { useCalendar } from './hooks';
import { weekDays } from './constants';
import { ArrowButton } from '../ArrowButton';
import * as S from './styles';

type CalendarPayload = {
  start?: Date | undefined;
  end?: Date | undefined;
};

type CalendarProps = {
  onChange: ({ start, end }: CalendarPayload) => void;
};

export const Calendar = ({ onChange }: CalendarProps) => {
  const [date, setDate] = useState<Date>(startOfMonth(new Date()));
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const { daysInMonth, dateFormatted } = useCalendar(date);

  const handlePreviousMonth = () => setDate(state => subMonths(state, 1));
  const handleNextMonth = () => setDate(state => addMonths(state, 1));

  const handlePressDay = useCallback(
    (day: Date) => {
      if (!startDate) {
        setStartDate(day);
        onChange({ start: day });
        return;
      }

      if (!endDate) {
        if (isBefore(startDate, day)) {
          setEndDate(day);
          onChange({ start: startDate, end: day });
          return;
        }

        setEndDate(startDate);
        setStartDate(day);
        onChange({ start: day, end: startDate });
        return;
      }

      if (startDate && endDate) {
        setStartDate(day);
        setEndDate(undefined);
        onChange({ start: day });
      }
    },
    [startDate, endDate, onChange],
  );

  const renderDay = useCallback(
    (day: Date) => {
      const disabled = isBefore(day, new Date());
      const selected = day === startDate || day === endDate;
      const inRange =
        startDate &&
        endDate &&
        isAfter(day, startDate) &&
        isBefore(day, endDate);

      return (
        <S.DayButton
          selected={!disabled && selected}
          inRange={!disabled && inRange}
          disabled={disabled}
          onPress={() => handlePressDay(day)}
        >
          <S.DayText
            disabled={disabled}
            selected={!disabled && selected}
            inRange={!disabled && inRange}
          >
            {format(day, 'd')}
          </S.DayText>
        </S.DayButton>
      );
    },
    [handlePressDay, startDate, endDate],
  );

  return (
    <S.Container>
      <S.Header>
        <ArrowButton
          direction="left"
          buttonSize={24}
          onPress={handlePreviousMonth}
        />
        <S.CurrentDate>{dateFormatted}</S.CurrentDate>
        <ArrowButton
          direction="right"
          buttonSize={24}
          onPress={handleNextMonth}
        />
      </S.Header>

      <S.WeekDays>
        {weekDays.map(weekDay => (
          <S.WeekDaysText key={weekDay}> {weekDay}</S.WeekDaysText>
        ))}
      </S.WeekDays>

      {(!startDate || !endDate || (startDate && endDate)) && (
        <S.MonthContainer
          data={daysInMonth}
          keyExtractor={item => item.toDateString()}
          numColumns={weekDays.length}
          renderItem={({ item: day }: { item: Date }) => renderDay(day)}
        />
      )}
    </S.Container>
  );
};
