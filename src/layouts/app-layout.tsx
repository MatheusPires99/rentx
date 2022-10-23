import { useRouter } from "next/router";
import { ReactElement } from "react";

import { BottomBar } from "@/components/bottom-bar";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

type AppLayoutProps = {
  children: ReactElement;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  const router = useRouter();

  const isHomePage = router.pathname === "/";

  if (isHomePage) {
    return children;
  }

  return (
    <>
      <Sidebar />
      <div className="flex flex-col flex-1 mb-20 ml-0 lg:mb-0 lg:ml-20">
        <Header />
        <main className="container flex-1 mt-10 lg:pb-16">{children}</main>
      </div>
      <BottomBar />
    </>
  );
};
