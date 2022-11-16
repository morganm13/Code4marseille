import React, { useRef, useEffect, useState, useContext } from "react";
import { JOContext } from '../context/JOContext';
import JOJson from '../context/JOEvent.json';
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import './style/Map.css'
mapboxgl.accessToken =
  "pk.eyJ1IjoianVsaWFubWFuY2hlYyIsImEiOiJjbGFpMGkwaXAwaDE5M3dtejY1aXVmZzZoIn0.xxr5qSlakNCcOmRQh9RKMg";

function Map() {
  const {JO} = useContext(JOContext);
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(5.3750);
  const [lat, setLat] = useState(43.2660);
  const [zoom, setZoom] = useState(15);
  let arrayLocalisation = [];

  useEffect(() => {
    if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [lng, lat],
        zoom: zoom,
    });
  });

  useEffect(() => {

    JO.forEach((item) => {
      arrayLocalisation.push([JOJson[item].lng, JOJson[item].lat]);
      console.log(arrayLocalisation);
    });

    if (!map.current) return; // wait for map to initialize
    map.current.on('load', () => {
        map.current.addSource('route', {
            'type': 'geojson',
            'data': {
                'type': 'Feature', 
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [[ "5.3750", "43.2660" ], [ "5,3925", "43,2701" ], [ "5.3740", "43.2640" ], ["5.3740", "43.2650"], ["5.3750", "43.2690"], ["5.3780", "43.2690"]]
                }
            }
        });
        map.current.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'route',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#888',
                'line-width': 8
            }
        });
    });
    
  });

  return (
    <div>
      
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
export default Map;

