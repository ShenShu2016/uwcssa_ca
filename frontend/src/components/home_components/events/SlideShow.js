import "./SlideShow.css";
import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";

// const SlideShow = () => {
// const backgroundImage = [
//   "url(https://bnetcmsus-a.akamaihd.net/cms/blog_header/5y/5Y3CILWFHMTG1624658012466.png)",
//   "url(https://sm.ign.com/t/ign_ap/preview/d/diablo-nightmare-edition-statue-announced/diablo-nightmare-edition-statue-announced_5pxv.1200.jpg)",
//   "url(https://cdn.mos.cms.futurecdn.net/aMYMFK7FHw3viJCZ869hJH.jpg)",
// ];
//   const delay = 4000;
//   const [index, setIndex] = React.useState(0);
//   const timeoutRef = React.useRef(null);

//   const nextSlide = () => {
//     setIndex(index === backgroundImage.length - 1 ? 0 : index + 1);
//   };

//   const prevSlide = () => {
//     setIndex(index === 0 ? backgroundImage.length - 1 : index - 1);
//   };
//   function resetTimeout() {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   }

//   React.useEffect(() => {
//     resetTimeout();
//     timeoutRef.current = setTimeout(
//       () =>
//         setIndex((prevIndex) =>
//           prevIndex === backgroundImage.length - 1 ? 0 : prevIndex + 1,
//         ),
//       delay,
//     );

//     return () => {
//       resetTimeout();
//     };
//   }, [index]);

//   return (
//     <Fragment>
//       <div className="cssa-events-bottom-border">
//         <h3>CSSA Events</h3>
//       </div>

//       <div className="slideshow">
//         <button className="left-arrow" onClick={prevSlide}>
//           left
//         </button>
//         <button className="right-arrow" onClick={nextSlide}>
//           right
//         </button>
//         <div
//           className="slideshowSlider"
//           style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
//         >
//           {backgroundImage.map((backgroundImage, index) => (
//             <div className="slide" key={index} style={{ backgroundImage }}>
//               <div className=""></div>
//             </div>
//           ))}
//         </div>

//         <div className="slideshowDots">
//           {backgroundImage.map((_, idx) => (
//             <div
//               key={idx}
//               className={`slideshowDot${index === idx ? " active" : ""}`}
//               onClick={() => {
//                 setIndex(idx);
//               }}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </Fragment>
//   );
// };
const SlideShow = () => {
  const SliderData = [
    {
      image:
        "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
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
          onClick={prevSlide}
        ></i>

        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="travel image" className="image" />
              )}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default SlideShow;
