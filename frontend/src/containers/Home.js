import React from "react";
import FeatureIntro from "../components/Home/FeatureIntro";
import Hiring from "../components/Home/Hiring";
import UwcssaIntro from "../components/Home/UwcssaIntro";
import ContactUs from "../components/Home/ContactUs";
const Home = ({ loggedIn }) => (
  <div>
    <UwcssaIntro loggedIn={loggedIn} />
    <FeatureIntro />
    <Hiring />
    <ContactUs />
  </div>
);

export default Home;
