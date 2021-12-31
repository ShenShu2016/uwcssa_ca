import React, { useEffect, useRef } from "react";

// import circle from "./circle.svg";

function loadScript(src, position, id) {
  // console.log("我正在loadScript");
  if (!position) {
    return;
  }

  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", id);
  script.src = src;
  position.appendChild(script);
}

let map;

const GoogleMap = (props) => {
  const { center, defaultZoom, circleRadius = 750 } = props; // circleRadius: unit in [m]
  const loaded = useRef(false);
  useEffect(() => {
    if (typeof window !== "undefined" && !loaded.current) {
      // console.log(
      //   'typeof window !== "undefined" && !loaded.current',
      //   typeof window !== "undefined",
      //   !loaded.current
      // );
      if (!document.querySelector("#google-maps")) {
        loadScript(
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyCKR_7S6WE5ETziYlastsHnmKuvELeFTW4&libraries=places",
          document.querySelector("head"),
          "google-maps"
        );
      }

      loaded.current = true;
    }
  }, []);
  // const content = `<p style=color:blue;font-weight:bold>${address.description} 暂时先这样</p>`;

  useEffect(() => {
    function initMap() {
      map = new window.google.maps.Map(document.getElementById("map"), {
        center: {
          lat: center[0],
          lng: center[1],
        },
        zoom: defaultZoom,
        disableDefaultUI: true,
      });
      new window.google.maps.Circle({
        strokeColor: "#808080",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#rgba(0, 0, 0, 0.08)",
        fillOpacity: 0.35,
        map,
        center: { lat: center[0], lng: center[1] },
        radius: circleRadius,
      });
      // new window.google.maps.Marker({
      //   icon: circle,
      //   position: {
      //     lat: center[0],
      //     lng: center[1],
      //     map: map,
      //   },
      // });
      // const infoWindow = new window.google.maps.InfoWindow({
      //   content: content,
      // });

      // window.google.maps.event.addListener(marker, "click", () => {
      //   infoWindow.open(map, marker);
      // });
    }
    if (
      typeof window.google === "object" &&
      typeof window.google.maps === "object"
    ) {
      initMap();
    }
  }, [center, defaultZoom, circleRadius]);

  // console.log(window.google);
  return <div id="map" style={{ height: "100%" }}></div>;
};

export default GoogleMap;
