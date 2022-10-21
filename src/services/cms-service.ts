import { CarsDocument, CarsQuery } from "@/generated/graphql";
import { client } from "@/lib/apollo-client";

export const getAllCars = async () => {
  const { data } = await client.query<CarsQuery>({
    query: CarsDocument,
  });

  return data.cars;
};
