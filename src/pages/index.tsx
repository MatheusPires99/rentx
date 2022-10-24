import { signIn } from "next-auth/react";
import Image from "next/future/image";

import { RiGithubFill } from "react-icons/ri";

import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import { RentxFullLogo } from "@/components/icons";

const Home = () => {
  const handleSignInWithGitHub = () => {
    signIn("github");
  };

  return (
    <div className="bg-gray-800 w-screen h-screen">
      <div className="container h-full flex items-center justify-between gap-20">
        <div className="md:w-[426px]">
          <RentxFullLogo />
          <Heading size="5" className="mt-28 text-white leading-none">
            Rent a car simply and easily
          </Heading>
          <p className="mt-8 text-white text-xl">
            Several models for you to drive comfortably and safely.
          </p>
          <Button className="mt-16 w-[292px]" onClick={handleSignInWithGitHub}>
            <RiGithubFill className="w-6 h-6" />
            Sing in with GitHub
          </Button>
        </div>

        <div className="hidden md:block">
          <Image src="/hero-image.png" alt="RentX" width={608} height={612} />
        </div>
      </div>
    </div>
  );
};

export default Home;
