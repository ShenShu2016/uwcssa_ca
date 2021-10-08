import ContactUs from "../components/Home/ContactUs";
import FeatureIntro from "../components/Home/FeatureIntro";
import Hiring from "../components/Home/Hiring";
import React from "react";
import UwcssaIntro from "../components/Home/UwcssaIntro";
const Home = () => (
  <div>
    <UwcssaIntro />
    <FeatureIntro />
    <Hiring />
    <ContactUs />
  </div>
);

export default Home;
