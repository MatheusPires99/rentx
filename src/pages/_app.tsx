import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import cn from "classnames";

import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

import "@/styles/global.css";

type AppPropsWithSession = AppProps<{
  session: Session;
}>;

const App = ({ Component, pageProps }: AppPropsWithSession) => {
  const router = useRouter();

  const isHomePage = router.pathname === "/";
  const isHeaderVisible = router.pathname !== "/cars/[slug]";

  if (isHomePage) {
    return <Component {...pageProps} />;
  }

  return (
    <SessionProvider session={pageProps.session}>
      <Sidebar />
      <div className="flex flex-col flex-1 ml-20">
        {isHeaderVisible && <Header />}
        <main
          className={cn("container flex-1", {
            "mt-10": isHeaderVisible,
          })}
        >
          <Component {...pageProps} />
        </main>
      </div>
    </SessionProvider>
  );
};

export default App;
