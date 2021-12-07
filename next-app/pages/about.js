import React from "react";
import Head from "next/head";
import Footer from "@/layout/Footer";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Free tutorials" />
      </Head>
      <h2>About page</h2>
    </>
  );
};

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
