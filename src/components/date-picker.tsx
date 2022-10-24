import cn from "classnames";
import { format } from "date-fns";
import ReactDatePicker from "react-datepicker";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import { Button } from "./button";
import { Heading } from "./heading";

type DatePickerProps = {
  startDate: Date | null;
  endDate: Date | null;
  onDatesChange: ({
    startDate,
    endDate,
  }: {
    startDate: Date | null;
    endDate: Date | null;
  }) => void;
  onConfirmDate: () => void;
};

type DatePreviewProps = {
  label: string;
  content: string | null;
};

const DatePreview = ({ label, content }: DatePreviewProps) => {
  return (
    <div className="flex flex-col">
      <span className="font-heading text-sm text-gray-400">{label}</span>
      <strong
        className={cn("font-semibold text-3xl", {
          "border-b border-gray-400 mt-9": !content,
        })}
      >
        {content}
      </strong>
    </div>
  );
};

export const DatePicker = ({
  startDate,
  endDate,
  onDatesChange,
  onConfirmDate,
}: DatePickerProps) => {
  const isConfirmPeriodButtonDisabled = !startDate || !endDate;

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
      <div className="lg:w-[400px]">
        <ReactDatePicker
          onChange={([start, end]) =>
            onDatesChange({ startDate: start, endDate: end })
          }
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
          minDate={new Date()}
          renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="flex items-center justify-between mb-10">
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
                type="button"
                className={cn(
                  "w-8 h-8 flex items-center justify-center text-gray-500",
                  {
                    "cursor-not-allowed text-gray-300": prevMonthButtonDisabled,
                  },
                )}
              >
                <RiArrowLeftSLine className="w-6 h-6" />
              </button>

              <Heading size="3" as="strong">
                {format(date, "MMMM yyyy")}
              </Heading>

              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
                type="button"
                className={cn(
                  "w-8 h-8 flex items-center justify-center text-gray-500",
                  {
                    "cursor-not-allowed text-gray-300": nextMonthButtonDisabled,
                  },
                )}
              >
                <RiArrowRightSLine className="w-6 h-6" />
              </button>
            </div>
          )}
        />
      </div>

      <div className="lg:flex-1 flex flex-col">
        <div className="flex flex-col gap-6 lg:gap-12">
          <DatePreview
            label="FROM"
            content={startDate && format(startDate, "MMMM do")}
          />
          <DatePreview
            label="UNTIL"
            content={endDate && format(endDate, "MMMM do")}
          />
        </div>
        <Button
          className="mt-10 lg:mt-auto"
          disabled={isConfirmPeriodButtonDisabled}
          onClick={onConfirmDate}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};
