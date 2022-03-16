import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import "styles/globals.css";
import "styles/layout.css";
import "../components/navbar.css";
import Head from "next/head";
import Navbar from "../components/navbar";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout)
    return Component.getLayout(<Component {...pageProps} />);
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>Code julian</title>
        <meta name="description" content="Awesome tool" />
      </Head>
      <Header />

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}

export default MyApp;
