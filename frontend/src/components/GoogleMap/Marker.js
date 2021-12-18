import PropTypes from "prop-types";
import React from "react";

const InfoWindow = (props) => {
  const { place } = props;
  const infoWindowStyle = {
    position: "relative",
    bottom: 150,
    left: "-45px",
    width: 220,
    backgroundColor: "white",
    boxShadow: "0 2px 7px 1px rgba(0, 0, 0, 0.3)",
    padding: 10,
    fontSize: 14,
    zIndex: 100,
  };

  return (
    <div style={infoWindowStyle}>
      <div style={{ fontSize: 16 }}>{place.name}</div>
      <div style={{ fontSize: 14 }}>
        <span style={{ color: "grey" }}>{place.rating} </span>
        <span style={{ color: "orange" }}>
          {String.fromCharCode(9733).repeat(Math.floor(place.rating))}
        </span>
        <span style={{ color: "lightgrey" }}>
          {String.fromCharCode(9733).repeat(5 - Math.floor(place.rating))}
        </span>
      </div>
      <div style={{ fontSize: 14, color: "grey" }}>{place.types[0]}</div>
      <div style={{ fontSize: 14, color: "grey" }}>
        {"$".repeat(place.price_level)}
      </div>
      <div style={{ fontSize: 14, color: "green" }}>
        {place.opening_hours.open_now ? "Open" : "Closed"}
      </div>
    </div>
  );
};
const Marker = ({ text, onClick, open, place }) => {
  // console.log(place);
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "18px",
        height: "18px",
        backgroundColor: "#000",
        border: "2px solid #fff",
        borderRadius: "100%",
        userSelect: "none",
        transform: "translate(-50%, -50%)",
        cursor: `${(props) => (props.onClick ? "pointer" : "default")}`,
        "&:hover": {
          zIndex: 1,
        },
      }}
      alt={text}
      onClick={onClick}
    >
      {open && <InfoWindow place={place} />}
    </div>
  );
};

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;
