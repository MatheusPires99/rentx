import React, {
  createContext,
  useContext,
  ReactNode,
  useCallback,
  useState,
} from 'react';

import { startOfMonth } from 'date-fns';

type CalendarContextData = {
  calendarDate: Date;
  handleChangeCalendarDate: (date: Date) => void;
  startDate: Date | undefined;
  endDate: Date | undefined;
  handleDateChange: (start?: Date, end?: Date) => void;
  handleCleanAllDates: () => void;
};

type CalendarProviderProps = {
  children: ReactNode;
};

const CalendarContext = createContext<CalendarContextData>(
  {} as CalendarContextData,
);

export const CalendarProvider = ({ children }: CalendarProviderProps) => {
  const [calendarDate, setCalendarDate] = useState(startOfMonth(new Date()));
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const handleChangeCalendarDate = useCallback(
    (date: Date) => setCalendarDate(date),
    [],
  );

  const handleDateChange = useCallback(
    (start: Date | undefined, end: Date | undefined) => {
      setStartDate(start);
      setEndDate(end);
    },
    [],
  );

  const handleCleanAllDates = useCallback(() => {
    setCalendarDate(startOfMonth(new Date()));
    setStartDate(undefined);
    setEndDate(undefined);
  }, []);

  return (
    <CalendarContext.Provider
      value={{
        calendarDate,
        handleChangeCalendarDate,
        startDate,
        endDate,
        handleDateChange,
        handleCleanAllDates,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export function useCalendar(): CalendarContextData {
  const context = useContext(CalendarContext);

  if (!context) {
    throw new Error('useCalendar must be used within an CalendarProvider');
  }

  return context;
}
