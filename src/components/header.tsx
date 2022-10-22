import { useSession, signOut } from "next-auth/react";
import Image from "next/future/image";

import { RiShutDownLine, RiUser4Line } from "react-icons/ri";

import { IconButton } from "@/components/icon-button";

export const Header = () => {
  const { data: session } = useSession();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <header className="bg-white w-full">
      <div className="container flex items-center justify-between h-20">
        <strong className="font-semibold text-xl text-gray-600">Início</strong>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-3">
            {session?.user?.image ? (
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

            <span className="font-semibold">{session?.user?.name}</span>
          </div>

          <IconButton variant="ghost" onClick={handleSignOut}>
            <RiShutDownLine className="h-6 w-6" />
          </IconButton>
        </div>
      </div>
    </header>
  );
};
