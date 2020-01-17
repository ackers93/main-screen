import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  RainCloud,
  SnowCloud,
  SunCloud,
  Sunshine,
  ThunderCloud,
  WindyCloud
} from "./WeatherSVG";

import "../weather.css";

const Weather = () => {
  // initialize state
  const [weather, setWeather] = useState("");
  const [data, setData] = useState({
    isFetching: false,
    data: null
  });

  useEffect(() => {
    axios(
      "https://weatherbit-v1-mashape.p.rapidapi.com/current?units=I&lang=en&lon=-118.8820&lat=34.2856",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
          "x-rapidapi-key": "f1736cc588mshdf936f14cd9f976p13fb38jsn65705c646b85"
        }
      }
    )
      .then(response => {
        console.log(response.data.data[0]);
        setData(response.data.data[0]);
        setWeather(response.data.data[0].weather.description);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="weather">
      <Sunshine />
      <div className="weatherdiv">
        <h1>{data.temp}°</h1>
        <h1>{weather}</h1>
        <h1>{data.city_name}</h1>
      </div>
    </div>
  );
};

export default Weather;
