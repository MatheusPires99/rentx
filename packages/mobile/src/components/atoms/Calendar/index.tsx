import React from 'react';

import { Calendar as RNCalendar } from 'react-native-calendars';
import { useTheme } from 'styled-components';

import { calendarTheme } from './theme';

import './locale';

export const Calendar = () => {
  const theme = useTheme();

  return (
    <RNCalendar
      current={new Date()}
      minDate={new Date()}
      onDayPress={day => console.log('selected day', day)}
      onMonthChange={month => console.log('month changed', month)}
      hideExtraDays={false}
      disableMonthChange
      firstDay={1}
      hideDayNames={false}
      onPressArrowLeft={subtractMonth => subtractMonth()}
      onPressArrowRight={addMonth => addMonth()}
      markedDates={{
        '2021-04-25': {
          startingDay: true,
          color: theme.colors.primary,
          textColor: theme.colors.white,
        },
        '2021-04-26': {
          color: theme.colors.opacityPrimary,
          textColor: theme.colors.primary,
        },
        '2021-04-27': {
          color: theme.colors.opacityPrimary,
          textColor: theme.colors.primary,
        },
        '2021-04-28': {
          endingDay: true,
          color: theme.colors.primary,
          textColor: theme.colors.white,
        },
      }}
      markingType="period"
      theme={{
        ...calendarTheme,
        'stylesheet.calendar.header': {
          week: {
            marginTop: 24,
            marginBottom: 32,
            marginHorizontal: 16,
            paddingBottom: 16,
            borderBottomWidth: 1,
            borderStyle: 'solid',
            borderBottomColor: theme.colors.gray['100'],
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        },
      }}
    />
  );
};
