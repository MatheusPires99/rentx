import Image from "next/future/image";
import Link from "next/link";
import { ReactNode } from "react";

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
}: CarCardProps) => {
  return (
    <Link
      href={`/cars/${slug}`}
      className="flex flex-col bg-white border border-gray-200 max-w-[360px] w-full mx-auto relative hover:before:absolute hover:before:bottom-0 hover:before:bg-red-400 hover:before:h-[2px] hover:before:w-full hover:shadow-lg duration-200"
    >
      <div className="flex items-center justify-center py-10 px-6">
        <Image
          src={imageUrl}
          alt={`${brand} ${model}`}
          width={280}
          height={130}
        />
      </div>

      <div className="border-t border-gray-200 py-5 px-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <DetailsBlock label={brand} content={model} size="sm" />
          <DetailsBlock
            label="AO DIA"
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
