import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";
import Image from "next/future/image";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { RiArrowRightLine, RiMailLine, RiUser6Line } from "react-icons/ri";
import { z } from "zod";

import { Button } from "@/components/button";
import { CarCard } from "@/components/car-card";
import { Heading } from "@/components/heading";
import { Input } from "@/components/input";
import { CarDetailsQuery } from "@/generated/graphql";
import { prisma } from "@/lib/prisma";
import { getCarBySlug } from "@/services/cms-service";

const updateUserDataSchema = z.object({
  name: z.string().min(1, "Digite o nome"),
  email: z.string().email("Digite um e-mail válido").min(1, "Digite o e-mail"),
});

type ProfileProps = {
  rents: {
    id: string;
    carSlug: string;
    startDate: string;
    endDate: string;
    userId: string;
    car: NonNullable<CarDetailsQuery["car"]>;
  }[];
};

type UpdateUserDataFormData = z.infer<typeof updateUserDataSchema>;

const Profile = ({ rents }: ProfileProps) => {
  const { data: session } = useSession();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<UpdateUserDataFormData>({
    resolver: zodResolver(updateUserDataSchema),
    defaultValues: {
      name: session?.user.name!,
      email: session?.user.email!,
    },
  });

  const handleUpdateData = async (data: UpdateUserDataFormData) => {
    await axios.put("/api/users", {
      name: data.name,
      email: data.email,
    });
  };

  return (
    <div className="flex flex-col lg:flex-row items-start h-full">
      <div className="w-full lg:w-[384px] flex flex-col items-center">
        <Image
          src={session?.user.image!}
          alt={session?.user.name!}
          width={180}
          height={180}
          className="rounded-full"
        />

        <form
          onSubmit={handleSubmit(handleUpdateData)}
          className="mt-10 w-full"
        >
          <div className="flex flex-col gap-2">
            <Input
              placeholder="Nome"
              icon={RiUser6Line}
              error={errors?.name?.message}
              {...register("name")}
            />
            <Input
              type="email"
              placeholder="E-mail"
              icon={RiMailLine}
              error={errors?.email?.message}
              {...register("email")}
            />
          </div>
          <Button
            size="sm"
            isLoading={isSubmitting}
            type="submit"
            className="mt-6"
          >
            Save changes
          </Button>
        </form>
      </div>

      <hr className="w-full lg:w-px h-px my-8 lg:h-full bg-gray-300 border-none lg:mx-[72px]" />

      <div className="flex-1">
        <Heading size="3">Appointments made</Heading>

        <ul className="flex flex-col gap-4 mt-6">
          {rents.map((rent) => (
            <li key={rent.id}>
              <CarCard
                slug={rent.car.slug}
                brand={rent.car.brand}
                model={rent.car.model}
                rentPricePerDay={rent.car.rentPricePerDay}
                imageUrl={rent.car.image.url}
                fuel={rent.car.fuel}
                variant="horizontal"
              />

              <div className="mt-1 bg-white px-8 py-5 border border-gray-200 flex items-center justify-between">
                <span className="uppercase text-xs text-gray-400 font-heading">
                  Period
                </span>

                <div className="flex items-center gap-2 lg:gap-6">
                  <span className="text-sm lg:text-lg font-semibold">
                    {format(new Date(rent.startDate), "dd MMM yyy")}
                  </span>
                  <RiArrowRightLine className="w-5 h-5 text-gray-400" />
                  <span className="text-sm lg:text-lg font-semibold">
                    {format(new Date(rent.endDate), "dd MMM yyy")}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;

Profile.auth = true;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession({ req: ctx.req });

  const rents = await prisma.rent.findMany({
    where: {
      userId: session?.user.id,
    },
  });

  const rentsWithCars = await Promise.all(
    rents.map(async (rent) => {
      const car = await getCarBySlug(rent.carSlug);

      return {
        ...rent,
        car,
      };
    }),
  );

  return {
    props: {
      rents: rentsWithCars,
    },
  };
};
