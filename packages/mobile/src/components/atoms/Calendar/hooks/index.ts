/* eslint-disable import/no-duplicates */
import { useMemo } from 'react';

import {
  addDays,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  startOfMonth,
  subDays,
} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

const addDaysOfLastMonth = (days: Date[]) => {
  if (getDay(days[0]) !== 0) {
    days.unshift(subDays(days[0], 1));
    addDaysOfLastMonth(days);
  }
};

const addDaysOfNextMonth = (daysInMonth: Date[]) => {
  if (getDay(daysInMonth[daysInMonth.length - 1]) !== 6) {
    daysInMonth.push(addDays(daysInMonth[daysInMonth.length - 1], 1));
    addDaysOfNextMonth(daysInMonth);
  }
};

export const useCalendar = (date: Date) => {
  const daysInMonth: Date[] = useMemo(() => {
    const firstDay = startOfMonth(date);
    const lastDay = endOfMonth(date);

    const days = eachDayOfInterval({ start: firstDay, end: lastDay });

    addDaysOfLastMonth(days);
    addDaysOfNextMonth(days);

    return days;
  }, [date]);

  const dateFormatted = useMemo(() => {
    const monthYear = format(date, 'MMMM yyyy', { locale: ptBR });

    return monthYear.charAt(0).toUpperCase() + monthYear.slice(1);
  }, [date]);

  return {
    daysInMonth,
    dateFormatted,
  };
};
