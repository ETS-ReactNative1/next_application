import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import "styles/globals.css";
import "styles/layout.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout)
    return Component.getLayout(<Component {...pageProps} />);
  return (
    <>
      <Head>
        <title>Code julian</title>
        <meta name="description" content="Awesome tool" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
