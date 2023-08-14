import JobseekerNavbar from "./jobseekernavbar";
import Footer from "../guest/footer";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

const JobSeeker = () => {
  return (
    <Fragment>
      <JobseekerNavbar />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default JobSeeker;
