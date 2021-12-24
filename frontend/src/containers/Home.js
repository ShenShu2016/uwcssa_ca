import BottomNav from "./BottomNav";
import ContactUs from "../components/Home/ContactUs";
import { Divider } from "@mui/material";
import FeatureIntro from "../components/Home/FeatureIntro";
import Footer from "../containers/Footer";
import React from "react";
import UwcssaIntro from "../components/Home/UwcssaIntro";
const Home = () => (
  <div>
    <UwcssaIntro />
    <Divider />
    <FeatureIntro />
    <Divider />
    <ContactUs />
    <Footer />
    <BottomNav />
  </div>
);

export default Home;
