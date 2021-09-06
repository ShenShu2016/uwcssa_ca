import React, { Fragment } from "react";
import FeatureIntro from "../components/Home/FeatureIntro";
import Hiring from "../components/Home/Hiring";
import UwcssaIntro from "../components/Home/UwcssaIntro";
import ContactUs from "../components/Home/ContactUs";
const Home = () => (
  <Fragment>
    <UwcssaIntro />
    <FeatureIntro />
    <Hiring />
    <ContactUs />
  </Fragment>
);

export default Home;
