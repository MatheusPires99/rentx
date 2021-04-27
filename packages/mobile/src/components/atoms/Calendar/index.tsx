import React from 'react';
import { Text } from 'react-native';

import { BookDate } from '../../../types';

type CalendarProps = {
  onDateChange: (date: BookDate) => void;
};

export const Calendar = ({ onDateChange }: CalendarProps) => {
  return <Text>Calendar</Text>;
};
