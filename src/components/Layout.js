import React from "react";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  const { isLoading, isAuthenticated, logout } = useAuth0();
  //conditionally render header instead of hiding on account page?

  return (
    <>
      <Header page={useLocation().pathname}/>
      <main>{children}</main>
    </>
  );
};

export default Layout;
