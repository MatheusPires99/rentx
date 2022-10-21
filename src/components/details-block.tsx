import cn from "classnames";

type DetailsBlockProps = {
  label: string;
  content: string;
  isHighlighted?: boolean;
  size?: "sm" | "lg";
};

export const DetailsBlock = ({
  label,
  content,
  isHighlighted = false,
  size = "sm",
}: DetailsBlockProps) => {
  return (
    <div className="flex flex-col gap-2">
      <span
        className={cn("font-heading text-gray-400 uppercase", {
          "text-xs leading-3": size === "sm",
          "text-sm leading-4": size === "lg",
        })}
      >
        {label}
      </span>
      <strong
        className={cn(
          "font-heading",
          isHighlighted ? "text-red-400" : "text-gray-600",
          {
            "font-medium text-xl leading-[22px]": size === "sm",
            "font-heading text-4xl": size === "lg",
          },
        )}
      >
        {content}
      </strong>
    </div>
  );
};
