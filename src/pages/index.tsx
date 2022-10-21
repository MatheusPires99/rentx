import Image from "next/future/image";
import Link from "next/link";

import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import { RentxFullLogo } from "@/components/icons";

const Home = () => {
  return (
    <div className="bg-gray-800 w-screen h-screen">
      <div className="container h-full flex items-center justify-between gap-20">
        <div className="w-[426px]">
          <RentxFullLogo />
          <Heading size="5" className="mt-28 text-white leading-none">
            Alugue um carro de maneira simples e fácil
          </Heading>
          <p className="mt-8 text-white text-xl">
            Vários modelos para você dirigir seguro, com conforto e segurança.
          </p>
          <Button className="mt-16 w-[292px]" asChild>
            <Link href="/cars">Começar agora</Link>
          </Button>
        </div>

        <div>
          <Image src="/hero-image.png" alt="RentX" width={608} height={612} />
        </div>
      </div>
    </div>
  );
};

export default Home;
