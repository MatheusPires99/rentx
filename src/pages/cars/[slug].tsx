import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/future/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { differenceInDays, format } from "date-fns";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiCalendarLine,
  RiCheckLine,
  RiCloseLine,
  RiDropLine,
  RiFlashlightLine,
  RiSpeedLine,
  RiSteering2Line,
  RiUploadLine,
  RiUser6Line,
} from "react-icons/ri";

import { Button } from "@/components/button";
import { CarAccessory } from "@/components/car-accessory";
import { DatePicker } from "@/components/date-picker";
import { DetailsBlock } from "@/components/details-block";
import { Heading } from "@/components/heading";
import { IconButton } from "@/components/icon-button";
import { CarGear } from "@/components/icons";
import {
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalTitle,
  ModalTrigger,
} from "@/components/modal";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/tabs";
import { CarDetailsQuery } from "@/generated/graphql";
import { getAllCars, getCarBySlug } from "@/services/cms-service";

type TabValue = "about" | "period" | undefined;

type CarDetailsProps = {
  car: NonNullable<CarDetailsQuery["car"]>;
};

const CarDetails = ({ car }: CarDetailsProps) => {
  const router = useRouter();

  const [tabValue, setTabValue] = useState<TabValue>(undefined);
  const [isDatePickerModalOpen, setIsDatePickerModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSusccessModalOpen] = useState(false);

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleConfirmRentPeriod = () => {
    setIsDatePickerModalOpen(false);
    setTabValue("period");
  };

  const handleReSelectDates = () => {
    setTabValue("about");
    setIsDatePickerModalOpen(true);
  };

  const handleRentCar = async () => {
    // TODO: Api call to create rent
    setIsSusccessModalOpen(true);
  };

  const handleConfirmSuccessRent = () => {
    router.push("/cars");
  };

  const numberOfRentDays =
    startDate && endDate ? differenceInDays(endDate, startDate) : 0;
  const totalPrice = numberOfRentDays * car.rentPricePerDay;

  const accessories = [
    { value: `${car.speed}km/h`, icon: RiSpeedLine },
    { value: `${car.acceleration}s`, icon: RiUploadLine },
    {
      value: car.fuel,
      icon: car.fuel === "gasoline" ? RiDropLine : RiFlashlightLine,
    },
    { value: car.exchange, icon: CarGear },
    { value: `${car.seats} pessoas`, icon: RiUser6Line },
    { value: `${car.turningDiameter} HP`, icon: RiSteering2Line },
  ];

  const isPeriodTabDisabled = !startDate || !endDate;

  return (
    <>
      <header className="flex items-center gap-12 border-b border-gray-300 pb-6 mb-10 mt-10">
        <Link
          href="/cars"
          className="text-gray-500 w-10 h-10 flex items-center justify-center"
        >
          <RiArrowLeftSLine className="w-8 h-8" />
        </Link>

        <DetailsBlock label={car.brand} content={car.model} size="lg" />
        <DetailsBlock
          label="AO DIA"
          content={`R$ ${car?.rentPricePerDay}`}
          size="lg"
          isHighlighted
        />
      </header>

      <div className="flex items-center justify-between gap-24">
        <div>
          <Image
            src={car.image.url}
            alt={`${car.brand} ${car.model}`}
            width={648}
            height={354}
          />
        </div>

        <div className="w-[384px]">
          <ul className="grid grid-cols-2 gap-2">
            {accessories.map((accessory) => (
              <li key={accessory.value}>
                <CarAccessory value={accessory.value} icon={accessory.icon} />
              </li>
            ))}
          </ul>

          <Tabs
            defaultValue="about"
            value={tabValue}
            onValueChange={(value) => setTabValue(value as TabValue)}
            className="mt-8"
          >
            <TabsList>
              <TabsTrigger value="about">SOBRE O CARRO</TabsTrigger>
              <TabsTrigger value="period" disabled={isPeriodTabDisabled}>
                PERÍODO
              </TabsTrigger>
            </TabsList>

            <TabsContent value="about">
              <p>{car.description}</p>

              <Modal
                open={isDatePickerModalOpen}
                onOpenChange={setIsDatePickerModalOpen}
              >
                <ModalTrigger asChild>
                  <Button className="mt-24">Escolher período do aluguel</Button>
                </ModalTrigger>

                <ModalContent withFixedWidth>
                  <header className="flex items-center justify-between bg-gray-800 h-20 pl-12 text-white">
                    <ModalTitle asChild>
                      <Heading size="1">
                        Escolha uma data de início e fim do aluguel
                      </Heading>
                    </ModalTitle>
                    <ModalClose className="w-20 h-full flex items-center justify-center">
                      <RiCloseLine className="w-6 h-6 text-gray-400" />
                    </ModalClose>
                  </header>

                  <main className="bg-white p-12">
                    <DatePicker
                      startDate={startDate}
                      endDate={endDate}
                      onDatesChange={(dates) => {
                        setStartDate(dates.startDate);
                        setEndDate(dates.endDate);
                      }}
                      onConfirmDate={handleConfirmRentPeriod}
                    />
                  </main>
                </ModalContent>
              </Modal>
            </TabsContent>

            <TabsContent value="period">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {startDate && (
                    <DetailsBlock
                      label="DE"
                      content={format(startDate, "dd MMM yyy")}
                    />
                  )}
                  <RiArrowRightSLine className="text-gray-500" />
                  {endDate && (
                    <DetailsBlock
                      label="DE"
                      content={format(endDate, "dd MMM yyy")}
                    />
                  )}
                </div>

                <IconButton onClick={handleReSelectDates}>
                  <RiCalendarLine className="h-6 w-6" />
                </IconButton>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-300">
                <DetailsBlock
                  label="TOTAL"
                  content={`R$ ${car.rentPricePerDay} x${numberOfRentDays} diárias`}
                />
                <Heading as="strong" className="text-green-400">
                  R$ {totalPrice}
                </Heading>
              </div>

              <Button
                variant="success"
                className="mt-24"
                onClick={handleRentCar}
              >
                Alugar agora
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Modal open={isSuccessModalOpen}>
        <ModalContent>
          <div className="bg-gray-700 p-16 flex flex-col items-center">
            <RiCheckLine className="text-green-400 w-28 h-28" />
            <ModalTitle asChild>
              <Heading className="text-white mt-6">Carro alugado!</Heading>
            </ModalTitle>
            <ModalDescription className="mt-4 text-gray-400 text-center max-w-[256px]">
              Agora você só precisa ir até a concessionária da RentX pegar o seu
              automóvel.
            </ModalDescription>
            <Button
              className="mt-10 w-[120px]"
              variant="neutral"
              onClick={handleConfirmSuccessRent}
            >
              Ok
            </Button>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CarDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  const cars = await getAllCars();

  const paths = cars.map((car) => ({ params: { slug: car.slug } }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string;

  const car = await getCarBySlug(slug);

  if (!car) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      car,
    },
    revalidate: 60 * 60, // 1 hour
  };
};
