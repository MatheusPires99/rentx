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

  return (
    <CalendarContext.Provider value={{ startDate, endDate, handleDateChange }}>
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
