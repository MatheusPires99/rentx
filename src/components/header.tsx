import { useSession, signOut, signIn } from "next-auth/react";
import Image from "next/future/image";

import { RiShutDownLine, RiGithubFill, RiUser4Line } from "react-icons/ri";

import { IconButton } from "@/components/icon-button";

import { Button } from "./button";

const RightSide = () => {
  const { data: session, status } = useSession();

  const handleSignInWithGitHub = () => {
    signIn("github");
  };

  const handleSignOut = () => {
    signOut();
  };

  if (status === "loading") {
    return <div>Validating session...</div>;
  }

  if (!session) {
    return (
      <Button
        size="xs"
        variant="secondary"
        className="w-fit"
        onClick={handleSignInWithGitHub}
      >
        Sing in with GitHub
        <RiGithubFill className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-3">
        {session.user?.image ? (
          <Image
            src={session.user?.image}
            alt={session.user?.name || ""}
            width={32}
            height={32}
            className="rounded-full"
          />
        ) : (
          <RiUser4Line />
        )}

        <span className="font-semibold">{session.user?.name}</span>
      </div>

      <IconButton variant="ghost" onClick={handleSignOut}>
        <RiShutDownLine className="h-6 w-6" />
      </IconButton>
    </div>
  );
};

export const Header = () => {
  return (
    <header className="bg-white w-full">
      <div className="container flex items-center justify-between h-20">
        <strong className="font-semibold text-xl text-gray-600">Início</strong>

        <RightSide />
      </div>
    </header>
  );
};
