import React, { useState, useEffect } from "react";
import "./Card.css";

function Card({ apiAddress, index }) {
  const [newsData, setNewsData] = useState({});

  useEffect(() => {
    getNewsWithFetch();
  }, []);
  const getNewsWithFetch = async () => {
    const response = await fetch(apiAddress);
    const jsonData = await response.json();
    setNewsData(jsonData[index]);
  };

  return (
    <div className="card-container">
      <div className="image-container">
        <img src={newsData.image} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{newsData.topic_name}</h3>
        </div>
        <div className="card-body">
          <p>{newsData.content}</p>
        </div>
      </div>
      <div className="card-btn">
        <cardbutton>
          <a href="">View More</a>
        </cardbutton>
      </div>
    </div>
  );
}

export default Card;
