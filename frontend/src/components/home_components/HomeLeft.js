import React from "react";
import "./HomeLeft.css";
const HomeLeft = () => {
  return (
    <>
      <iframe
        src="https://www.youtube.com/embed/ovuZ2YTGUf0?start=3007?autoplay=true"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className="home-video"
      ></iframe>
    </>
  );
};
export default HomeLeft;
