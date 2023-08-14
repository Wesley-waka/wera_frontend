import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default Admin;
