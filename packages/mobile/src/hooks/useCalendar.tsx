import React, {
  createContext,
  useContext,
  ReactNode,
  useCallback,
  useState,
} from 'react';

type CalendarContextData = {
  startDate: Date | undefined;
  endDate: Date | undefined;
  handleDateChange: (start?: Date, end?: Date) => void;
  handleCleanDates: () => void;
};

type CalendarProviderProps = {
  children: ReactNode;
};

const CalendarContext = createContext<CalendarContextData>(
  {} as CalendarContextData,
);

export const CalendarProvider = ({ children }: CalendarProviderProps) => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const handleDateChange = useCallback(
    (start: Date | undefined, end: Date | undefined) => {
      setStartDate(start);
      setEndDate(end);
    },
    [],
  );

  const handleCleanDates = useCallback(() => {
    setStartDate(undefined);
    setEndDate(undefined);
  }, []);

  return (
    <CalendarContext.Provider
      value={{ startDate, endDate, handleDateChange, handleCleanDates }}
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
