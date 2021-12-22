import ContactUs from "../components/Home/ContactUs";
import FeatureIntro from "../components/Home/FeatureIntro";
import Footer from "../containers/Footer";
import React from "react";
import UwcssaIntro from "../components/Home/UwcssaIntro";
import BottomNav from "./BottomNav";
const Home = () => (
  <div>
    <UwcssaIntro />
    <FeatureIntro />
    <ContactUs />
    <Footer />
    <BottomNav />
  </div>
);

export default Home;
