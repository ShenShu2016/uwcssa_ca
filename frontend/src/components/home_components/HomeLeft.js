import React from "react";
import "./HomeLeft.css";
const HomeLeft = () => {
  return (
    <>
      <iframe
        src="https://www.youtube.com/embed/4YpS6MhQSqg?autoplay=true"
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
