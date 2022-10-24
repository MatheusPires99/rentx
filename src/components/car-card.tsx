import Image from "next/future/image";
import Link from "next/link";
import { ReactNode } from "react";

import cn from "classnames";
import { RiDropLine, RiFlashlightLine } from "react-icons/ri";

import { DetailsBlock } from "@/components/details-block";
import { Fuel } from "@/generated/graphql";

type CarCardProps = {
  slug: string;
  brand: string;
  model: string;
  rentPricePerDay: number;
  imageUrl: string;
  fuel: Fuel;
  variant?: "vertical" | "horizontal";
};

const fuels: Record<Fuel, ReactNode> = {
  eletric: <RiFlashlightLine className="w-8 h-8" />,
  gasoline: <RiDropLine className="w-8 h-8" />,
};

export const CarCard = ({
  slug,
  brand,
  model,
  rentPricePerDay,
  imageUrl,
  fuel,
  variant = "vertical",
}: CarCardProps) => {
  return (
    <Link
      href={`/cars/${slug}`}
      className={cn(
        "bg-white flex border border-gray-200 relative hover:before:absolute hover:before:bottom-0 hover:before:bg-red-400 hover:before:h-[2px] hover:before:w-full hover:shadow-lg duration-200",
        {
          "flex-col lg:max-w-[360px] w-full": variant === "vertical",
          "flex-row-reverse": variant === "horizontal",
        },
      )}
    >
      <div
        className={cn("flex items-center justify-center", {
          "py-10 px-6": variant === "vertical",
          "px-12": variant === "horizontal",
        })}
      >
        <Image
          src={imageUrl}
          alt={`${brand} ${model}`}
          width={280}
          height={130}
        />
      </div>

      <div
        className={cn("border-t border-gray-200 relative flex", {
          "items-center justify-between py-5 px-6": variant === "vertical",
          "items-end justify-start flex-1 py-10 px-8 gap-6":
            variant === "horizontal",
        })}
      >
        <div
          className={cn("flex gap-6", {
            "items-center": variant === "vertical",
            "flex-col": variant === "horizontal",
          })}
        >
          <DetailsBlock label={brand} content={model} size="sm" />
          <DetailsBlock
            label="PER DAY"
            content={`R$ ${rentPricePerDay}`}
            isHighlighted
            size="sm"
          />
        </div>

        <div className="text-gray-400">{fuels[fuel]}</div>
      </div>
    </Link>
  );
};
