import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "../components/card/Card";

import HomeTickers from "../components/home_components/HomeTickers";
import HomeLeft from "../components/home_components/HomeLeft";
import "../components/home_components/Home.css";
const Home = () => (
  <Fragment>
    {/* <h1 className="home">Home</h1>
      <Card 
      apiAddress='http://127.0.0.1:8000/news/article_list/'
      index='0'
      />
      <Card 
      apiAddress='http://127.0.0.1:8000/news/article_list/'
      index='1'
      /> */}
    <div className="home-container">
      <div className="home-left-container">
        <HomeLeft />
      </div>
      <div className="home-right-constainer">
        <HomeTickers />
      </div>
    </div>
  </Fragment>
);

export default Home;
