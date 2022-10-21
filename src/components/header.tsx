import Link from "next/link";

import { RiUser6Line } from "react-icons/ri";

export const Header = () => {
  return (
    <header className="bg-white w-full">
      <div className="container flex items-center justify-between h-20">
        <strong className="font-semibold text-xl text-gray-600">Início</strong>

        <Link href="/sign-in" className="font-semibold flex items-center gap-4">
          Faça login
          <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
            <RiUser6Line className="w-6 h-6" />
          </div>
        </Link>
      </div>
    </header>
  );
};
