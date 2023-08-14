import Footer from "./footer";
import Navbar from "./navbar";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Guest = () => {
  return (
    <Fragment>
      <Navbar />

      <Outlet />

      <Footer />
    </Fragment>
  );
};

export default Guest;
