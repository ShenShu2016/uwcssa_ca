import React, { useRef, useState, useEffect } from "react";
import NewsTicker, { Directions } from "../react-advanced-news-ticker/index";
import "./HomeTickers.css";
import axios from "axios";
function HomeTickers() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  // const [newsData, setNewsData] = useState(null);

  // useEffect(() => {
  //   axios.get("http://127.0.0.1:8000/news/article_list/").then((response) => {
  //     setNewsData(
  //       response.data.results.map((itemData, index) => (
  //         <div className="inner-item-row" key={index}>
  //           <div className="inner-item-row-img">
  //             <img src={itemData.image} alt="Sample image" />
  //           </div>
  //           <div className="inner-item-row-other">
  //             <a href="#">{itemData.subject}</a>
  //             <p>{itemData.content}</p>
  //           </div>
  //         </div>
  //       )),
  //     );
  //   });
  // }, []);
  const [foodData, setfoodData] = useState(null);
  const options1 = {
    method: "GET",
    url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
    params: { ingr: "apple" },
    headers: {
      "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
      "x-rapidapi-key": "99baa41484msh7a0311690b392d5p10e0a7jsn67dbcdd3b4cd",
    },
  };

  axios
    .request(options1)
    .then((response) => {
      setfoodData(
        response.data.hints.map((itemData, index) => (
          <div className="inner-item-row" key={index}>
            <div className="inner-item-row-img">
              <img src={itemData.food.image} alt="Sample image" />
            </div>
            <div className="inner-item-row-other">
              <a href={itemData.food.uri}>{itemData.food.foodId}</a>
              <p>{itemData.food.label}</p>
            </div>
          </div>
        )),
      );
    })
    .catch(function (error) {
      console.error(error);
    });

  const secondOptions = {
    method: "GET",
    url: "https://apex-legends.p.rapidapi.com/news/en-us",
    headers: {
      "x-rapidapi-host": "apex-legends.p.rapidapi.com",
      "x-rapidapi-key": "99baa41484msh7a0311690b392d5p10e0a7jsn67dbcdd3b4cd",
    },
  };
  const [forumData, setforumData] = useState(null);
  useEffect(() => {
    axios.request(secondOptions).then((response) => {
      setforumData(
        response.data.map((itemData, index) => (
          <div className="inner-item-row" key={index}>
            <div className="inner-item-row-img">
              <img src={itemData.img} alt="Sample image" />
            </div>
            <div className="inner-item-row-other">
              <a href={itemData.link}>{itemData.title}</a>
              <p>{itemData.short_desc}</p>
            </div>
          </div>
        )),
      );
    });
  }, []);

  return (
    <div className="home-ticker-container-row">
      <div id="nt-example1-container">
        <div className="ticker-title">
          <h3>Last News</h3>
        </div>
        <NewsTicker
          id="nt-example1"
          ref={ref1}
          rowHeight={94}
          maxRows={3}
          duration={4000}
        >
          {foodData}
        </NewsTicker>
        {/* <i
          className="fa fa-arrow-up"
          id="nt-example1-prev"
          onClick={() => {
            ref1.current.movePrev();
            ref1.current.resetInterval();
          }}
        />
        <i
          className="fa fa-arrow-down"
          id="nt-example1-next"
          onClick={() => {
            ref1.current.moveNext();
            ref1.current.resetInterval();
          }}
        /> */}
      </div>
      <div id="nt-example1-container">
        <div className="ticker-title">
          <h3>Hot Forum Topics</h3>
        </div>
        <NewsTicker
          id="nt-example1"
          ref={ref2}
          rowHeight={93}
          maxRows={3}
          duration={3500}
          direction={Directions.DOWN}
        >
          {forumData}
        </NewsTicker>
        {/* <i
          className="fa fa-arrow-up"
          id="nt-example1-prev"
          onClick={() => {
            ref2.current.movePrev();
            ref2.current.resetInterval();
          }}
        />
        <i
          className="fa fa-arrow-down"
          id="nt-example1-next"
          onClick={() => {
            ref2.current.moveNext();
            ref2.current.resetInterval();
          }}
        /> */}
      </div>
    </div>
  );
}

export default HomeTickers;
