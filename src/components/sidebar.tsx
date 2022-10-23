import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

import cn from "classnames";
import { RiCarLine, RiUser6Line } from "react-icons/ri";

import { RentxLogo } from "@/components/icons";

type NavLinkProps = LinkProps & {
  children: ReactNode;
};

const NavLink = ({ href, children, ...props }: NavLinkProps) => {
  const router = useRouter();

  const isActive = router.pathname.includes(String(href));

  return (
    <Link
      href={href}
      className={cn(
        isActive
          ? "text-white bg-black before:absolute before:left-0 before:inset-y-0 before:bg-red-400 before:w-[3px]"
          : "text-gray-500",
        "w-full h-14 flex items-center justify-center relative",
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 h-screen w-20 hidden lg:flex lg:flex-col">
      <div className="bg-red-400 w-20 h-20 flex items-center justify-center">
        <RentxLogo />
      </div>
      <nav className="flex-1 flex flex-col justify-center gap-4 bg-gray-800">
        <NavLink href="/cars">
          <RiCarLine className="w-6 h-6" />
        </NavLink>
        <NavLink href="/profile">
          <RiUser6Line className="w-6 h-6" />
        </NavLink>
      </nav>
    </aside>
  );
};
