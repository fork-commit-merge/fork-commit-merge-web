import { SessionProvider } from "next-auth/react";
import "../styles/tailwind.css";
import type { AppProps } from "next/app";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}

export default MyApp;
