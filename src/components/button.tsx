import { ButtonHTMLAttributes, forwardRef } from "react";

import cn from "classnames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "success" | "neutral";
  size?: "sm" | "md";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", className, children, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "font-semibold w-full flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:bg-opacity-50 duration-200",
          {
            "text-white bg-red-400 enabled:hover:bg-red-500":
              variant === "primary",
            "text-gray-600 bg-transparent border border-gray-300 enabled:hover:border-red-400 enabled:hover:text-red-400":
              variant === "secondary",
            "text-white bg-green-400 enabled:hover:bg-green-500":
              variant === "success",
            "text-white bg-gray-600 enabled:hover:bg-gray-800":
              variant === "neutral",
          },
          {
            "px-6 h-16 text-base": size === "sm",
            "px-6 h-20 text-lg": size === "md",
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
