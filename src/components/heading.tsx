import { ReactNode } from "react";

import cn from "classnames";

type HeadingProps = {
  size?: "1" | "2" | "3" | "4" | "5";
  as?: "h1" | "h2" | "h3" | "strong";
  className?: string;
  children: ReactNode;
};

export const Heading = ({
  size = "2",
  as: Element = "h2",
  className,
  children,
}: HeadingProps) => {
  return (
    <Element
      className={cn(
        "font-heading font-semibold",
        {
          "text-lg": size === "1",
          "text-xl": size === "2",
          "text-2xl": size === "3",
          "text-4xl": size === "4",
          "text-[54px]": size === "5",
        },
        className,
      )}
    >
      {children}
    </Element>
  );
};
