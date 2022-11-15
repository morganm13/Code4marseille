import axios from "axios";
import { useEffect } from 'react';

function Map()
{
    var axiosConfig = {
        method: 'get',
        url: "https://api.mapbox.com/directions/v5/mapbox/cycling/-122.42,37.78;-77.03,38.91?access_token=pk.eyJ1IjoianVsaWFubWFuY2hlYyIsImEiOiJjbGFpMGkwaXAwaDE5M3dtejY1aXVmZzZoIn0.xxr5qSlakNCcOmRQh9RKMg",
        headers: {}
    };

    useEffect(() => 
    {
        axios(axiosConfig).then(function(response) 
        {
            console.log(response.data);
        }).catch(function (error) 
        {
            console.log(error);
        });
    });

    return (
        <img src="https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-87.0186,32.4055,14/500x300?access_token=pk.eyJ1IjoianVsaWFubWFuY2hlYyIsImEiOiJjbGFpMGkwaXAwaDE5M3dtejY1aXVmZzZoIn0.xxr5qSlakNCcOmRQh9RKMg" alt="test"/>
    )
}

<<<<<<< Updated upstream
export default Map;
=======
  return (
    <div>
      
      <div ref={mapContainer} className="map-container" />
      </div>    
      
  );
}
>>>>>>> Stashed changes
