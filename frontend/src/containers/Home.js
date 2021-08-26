import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "../components/card/Card";

import HomeTickers from "../components/home_components/HomeTickers";
import HomeLeft from "../components/home_components/HomeLeft";
import "../components/home_components/Home.css";
import "../components/home_components/midbar/MidBar";
import MidBar from "../components/home_components/midbar/MidBar";
import SlideShow from "../components/home_components/events/SlideShow";
import WithJoinUs from "../components/home_components/withjoinus/WithJoinUs";
const Home = () => (
  <Fragment>
    <div className="home-container">
      <div className="home-left-container">
        <HomeLeft />
      </div>
      <div className="home-right-constainer">
        <HomeTickers />
      </div>
    </div>
    <MidBar />
    <SlideShow />
    <WithJoinUs />
  </Fragment>
);

export default Home;
