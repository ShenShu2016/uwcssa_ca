import "./SlideShow.css";
import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";

const SlideShow = () => {
  const SliderData = [
    {
      image:
        "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "11111",
    },
    {
      image:
        "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
      title: "22222",
    },
    {
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
      title: "33333",
    },
    {
      image:
        "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
      title: "44444",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
      title: "55555",
    },
  ];
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <Fragment>
      <div className="cssa-events-bottom-border">
        <h3>CSSA Events</h3>
      </div>
      <div className="slider">
        {/* <button className="left-arrow" onClick={prevSlide}>
        left
      </button> */}
        <i
          class="left-arrow far fa-arrow-alt-circle-left"
          onClick={prevSlide}
        ></i>
        <i
          class="right-arrow far fa-arrow-alt-circle-right"
          onClick={nextSlide}
        ></i>

        {SliderData.map((slide, index) => {
          return (
            <Fragment>
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <img src={slide.image} alt="travel image" className="image" />
                )}
                <h1>{slide.title}</h1>
              </div>
            </Fragment>
          );
        })}
      </div>
      <div className="slideshowDots">
        {SliderData.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${current === idx ? " active" : ""}`}
            onClick={() => {
              setCurrent(idx);
            }}
          ></div>
        ))}
      </div>
    </Fragment>
  );
};

export default SlideShow;
