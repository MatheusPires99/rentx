import { ButtonHTMLAttributes, forwardRef } from "react";

import { Slot } from "@radix-ui/react-slot";
import cn from "classnames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "success" | "neutral";
  size?: "sm" | "md";
  asChild?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      asChild,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : "button";

    return (
      <Component
        ref={ref}
        className={cn(
          "px-6 font-semibold w-full flex items-center justify-center disabled:cursor-not-allowed disabled:bg-opacity-50  duration-200",
          {
            "text-white bg-red-400 enabled:hover:bg-red-500":
              variant === "primary",
            "text-gray-600 bg-transparent border border-gray-300 enabled:hover:border-red-400":
              variant === "secondary",
            "text-white bg-green-400 enabled:hover:bg-green-500":
              variant === "success",
            "text-white bg-gray-600 enabled:hover:bg-gray-800":
              variant === "neutral",
          },
          {
            "h-16 text-base": size === "sm",
            "h-20 text-lg": size === "md",
          },
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);
