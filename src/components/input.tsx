import { forwardRef, InputHTMLAttributes, useId } from "react";

import cn from "classnames";
import { IconType } from "react-icons";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: IconType;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon: Icon, error, className, ...props }, ref) => {
    const errorId = useId();

    return (
      <div className="flex flex-col gap-2">
        <div
          className={cn(
            "flex items-center h-16 bg-white border border-gray-200 focus-within:border-gray-400",
            className,
          )}
        >
          <div className="w-[72px] h-full flex items-center justify-center relative after:absolute after:right-0 after:w-0.5 after:h-10 after:bg-gray-100">
            <Icon className="text-gray-500 h-6 w-6" />
          </div>
          <input
            ref={ref}
            className="h-full flex-1 pl-6 placeholder:text-gray-400 focus:outline-none"
            aria-errormessage={error ? errorId : undefined}
            aria-invalid={error ? "true" : "false"}
            {...props}
          />
        </div>

        {!!error && (
          <span id={errorId} className="text-red-400">
            {error}
          </span>
        )}
      </div>
    );
  },
);
