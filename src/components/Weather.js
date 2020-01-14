import React, { useState, useEffect } from "react";

const Weather = () => {
  // initialize state
  const [moorpark, setMoorpark] = useState("Moorpark");
  const [data, setData] = useState({
    isFetching: false,
    data: null
  });

  fetch(
    "https://community-open-weather-map.p.rapidapi.com/weather?lat=34.2856&lon=118.8820&id=2172797&units=%2522imperial%2522&mode=html&q=moorpark%252Cus",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "f1736cc588mshdf936f14cd9f976p13fb38jsn65705c646b85"
      }
    }
  )
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });

  return (
    <div className="weather">
      <div className="weatherdiv">
        {(() => {
          if (data.data)
            return <div>{/* <p>Weather: {data.weather.temp}</p> */}</div>;
        })()}
      </div>
    </div>
  );
};

export default Weather;
