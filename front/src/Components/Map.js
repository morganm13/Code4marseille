import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import './style/Map.css'
mapboxgl.accessToken =
  "pk.eyJ1IjoianVsaWFubWFuY2hlYyIsImEiOiJjbGFpMGkwaXAwaDE5M3dtejY1aXVmZzZoIn0.xxr5qSlakNCcOmRQh9RKMg";

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(5.3722);
  const [lat, setLat] = useState(43.2950);
  const [zoom, setZoom] = useState(12);

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
    if (!map.current) return; // wait for map to initialize
    map.current.on('load', () => {
        map.current.addSource('route', {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [
                        [5.3713, 43.2665],
                        [5.3955, 43.2692],
                        
                    ]
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

