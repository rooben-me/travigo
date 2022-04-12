import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

const Layouts = ({ children, title = "book best hostel in your holiday" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="container mx-auto p-4 font-inter">
        <Navbar />
        {children}
      </section>
    </div>
  );
};

export default Layouts;
