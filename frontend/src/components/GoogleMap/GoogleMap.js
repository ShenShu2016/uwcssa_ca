import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";
import React from "react";

const GoogleMap = ({ children, ...props }) => (
  <div style={{ width: "100%", height: "100%" }}>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: "AIzaSyCKR_7S6WE5ETziYlastsHnmKuvELeFTW4",
        libraries: ["visualization"],
      }}
      {...props}
    >
      {children}
    </GoogleMapReact>
  </div>
);

GoogleMap.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

GoogleMap.defaultProps = {
  children: null,
};

export default GoogleMap;
