import { ButtonHTMLAttributes, forwardRef } from "react";

import cn from "classnames";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, variant = "primary", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "h-12 w-12 flex items-center justify-center duration-200",
          {
            "bg-red-400 enabled:hover:bg-red-500 text-white":
              variant === "primary",
            "text-gray-500": variant === "ghost",
          },
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);
