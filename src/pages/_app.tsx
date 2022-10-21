import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import cn from "classnames";

import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import "@/styles/global.css";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  const isHomePage = router.pathname === "/";
  const isHeaderVisible = router.pathname !== "/cars/[slug]";

  if (isHomePage) {
    return <Component {...pageProps} />;
  }

  return (
    <>
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
    </>
  );
};

export default App;
