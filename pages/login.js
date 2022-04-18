import React from "react";
import Login from "../components/auth/Login";

import Layout from "../components/Layouts";

const login = () => {
  return (
    <Layout title="login">
      <Login />
    </Layout>
  );
};

export default login;
