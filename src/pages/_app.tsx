import { Session } from "next-auth";
import { SessionProvider, useSession } from "next-auth/react";
import type { AppProps } from "next/app";
import { ReactElement } from "react";

import { AppLayout } from "@/layouts/app-layout";

import "@/styles/global.css";

type AppPropsWithSession = AppProps<{
  session: Session;
}> & {
  Component: AppProps["Component"] & { auth: boolean };
};

const AuthLoading = ({ children }: { children: ReactElement }) => {
  const { status } = useSession();

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  return children;
};

const App = ({ Component, pageProps }: AppPropsWithSession) => {
  return (
    <SessionProvider>
      <AppLayout>
        {Component.auth ? (
          <AuthLoading>
            <Component {...pageProps} />
          </AuthLoading>
        ) : (
          <Component {...pageProps} />
        )}
      </AppLayout>
    </SessionProvider>
  );
};

export default App;
