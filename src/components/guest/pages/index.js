import { Fragment } from "react";
import Team from "../team";
import Header from "../header";
import Feature from "../feature";
import AboutUs from "../about-us";

const GuestLanding = () => {
  return (
    <Fragment>
      <Header />

      <AboutUs />

      <Team />

      <Feature />
    </Fragment>
  );
};

export default GuestLanding;
