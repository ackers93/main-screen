import React, { useState, useEffect } from "react";
import axios from "axios";

import DynamicSvg from "../DynamicSVG";

import "../weather.css";

const Weather = () => {
  // initialize state
  const [icon, setIcon] = useState("sunshine");
  const [weatherCode, setWeatherCode] = useState("");
  const [weather, setWeather] = useState("");
  const [data, setData] = useState("");

  const dynamicSwitch = code => {
    if (
      code === "200" ||
      code === "201" ||
      code === "202" ||
      code === "230" ||
      code === "231" ||
      code === "232" ||
      code === "230"
    ) {
      setIcon("thundercloud");
    } else if (
      code === "300" ||
      code === "301" ||
      code === "302" ||
      code === "500" ||
      code === "501" ||
      code === "511" ||
      code === "520" ||
      code === "502" ||
      code === "521" ||
      code === "700" ||
      code === "711" ||
      code === "721" ||
      code === "731" ||
      code === "741" ||
      code === "751" ||
      code === "900"
    ) {
      setIcon("raincloud");
    } else if (
      code === "600" ||
      code === "601" ||
      code === "602" ||
      code === "610" ||
      code === "621" ||
      code === "623" ||
      code === "611" ||
      code === "612"
    ) {
      setIcon("snowcloud");
    } else if (code === "800") {
      setIcon("sunshine");
    } else if (
      code === "801" ||
      code === "802" ||
      code === "803" ||
      code === "804"
    ) {
      setIcon("suncloud");
    }
  };

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
        setWeatherCode(response.data.data[0].weather.code);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   console.log(weatherCode);
  //   dynamicSwitch(weatherCode);
  //   console.log(data);
  // }, [weatherCode, data]);

  useEffect(() => {
    setInterval(() => {
      console.log(weatherCode);
      dynamicSwitch(weatherCode);
      console.log(data);
    }, 1800000);
  }, [weatherCode, data]);

  return (
    <div className="weather">
      <div className="weatherdiv">
        <div className="weathericon">
          <DynamicSvg icon={icon} />
          <h1 className="temp">
            {data.temp}
            <span>°</span>
          </h1>
        </div>
        <h1 className="weathertext">{weather}</h1>
        <h1 className="cityname">{data.city_name}, CA</h1>
      </div>
    </div>
  );
};

export default Weather;
