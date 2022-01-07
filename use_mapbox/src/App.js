import React, { useRef, useState, useEffect } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import "./App.css";

function App() {
  const [viewport, setViewPort] = useState({
    latitude: 35.850577217482716,
    longitude: 128.4768999959185,
    zoom: 12,
    pitch: 0, // 보는 각도
  });

  return (
    <div className="App">
      <ReactMapGl
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        {...viewport}
        mapStyle={"mapbox://styles/mapbox/streets-v11"}
        width="100vw"
        height="100vh"
        onViewportChange={(viewport) => setViewPort(viewport)}
      >
        <Marker
          latitude={35.850577217482716}
          longitude={128.4768999959185}
          // offsetTop={(-viewport.zoom * 5) / 2}
        >
          <img
            src="https://w7.pngwing.com/pngs/731/25/png-transparent-location-icon-computer-icons-google-map-maker-marker-pen-cartodb-map-marker-heart-logo-color-thumbnail.png"
            width={viewport.zoom * 5}
            height={viewport.zoom * 5}
          />
        </Marker>
        Hello, MapBox
      </ReactMapGl>
    </div>
  );
}

export default App;
