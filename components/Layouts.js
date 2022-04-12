import React from "react";

const Layouts = ({ children, title = "book best hostel in your holiday" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {children}
    </div>
  );
};

export default Layouts;
