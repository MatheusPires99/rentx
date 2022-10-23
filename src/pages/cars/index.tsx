import { GetStaticProps } from "next";

import { CarCard } from "@/components/car-card";
import { Heading } from "@/components/heading";
import { CarsQuery } from "@/generated/graphql";
import { getAllCars } from "@/services/cms-service";

type CarsProps = {
  cars: CarsQuery["cars"];
};

const Cars = ({ cars }: CarsProps) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-0 border-b border-gray-300 pb-6 mb-6">
        <Heading size="4" as="h1">
          Carros disponíveis
        </Heading>
        <span>Total {cars.length} carros</span>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {cars.map((car) => (
          <li key={car.id}>
            <CarCard
              slug={car.slug}
              brand={car.brand}
              model={car.model}
              rentPricePerDay={car.rentPricePerDay}
              imageUrl={car.image.url}
              fuel={car.fuel}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cars;

Cars.auth = true;

export const getStaticProps: GetStaticProps = async () => {
  const cars = await getAllCars();

  return {
    props: {
      cars,
    },
    revalidate: 60 * 60, // 1 hour
  };
};
