import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

import cn from "classnames";
import { RiCarLine, RiUser6Line } from "react-icons/ri";

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
        isActive ? "text-red-400" : "text-gray-500",
        "w-full h-14 flex items-center justify-center relative",
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export const BottomBar = () => {
  return (
    <div className="lg:hidden fixed bottom-0 h-20 w-screen flex items-center bg-gray-100 border-t border-gray-200">
      <NavLink href="/cars">
        <RiCarLine className="w-6 h-6" />
      </NavLink>
      <NavLink href="/profile">
        <RiUser6Line className="w-6 h-6" />
      </NavLink>
    </div>
  );
};
