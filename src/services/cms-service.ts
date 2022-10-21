import {
  CarDetailsDocument,
  CarDetailsQuery,
  CarsDocument,
  CarsQuery,
} from "@/generated/graphql";
import { client } from "@/lib/apollo-client";

export const getAllCars = async () => {
  const { data } = await client.query<CarsQuery>({
    query: CarsDocument,
  });

  return data.cars;
};

export const getCarBySlug = async (slug: string) => {
  const { data } = await client.query<CarDetailsQuery>({
    query: CarDetailsDocument,
    variables: {
      slug,
    },
  });

  return data.car;
};
