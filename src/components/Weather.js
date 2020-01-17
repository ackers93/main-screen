import React, { useState, useEffect } from "react";
import axios from "axios";

import { DynamicSvg } from "../DynamicSVG";

import "../weather.css";

const Weather = () => {
  // initialize state
  const [icon, setIcon] = useState("sunshine");
  const [weatherCode, setWeatherCode] = useState("");
  const [weather, setWeather] = useState("");
  const [data, setData] = useState("");

  const dynamicSwitch = code => {
  
   if (code === "200" || "201" || "202" || "230" || "231" || "232" || "230") {
     setIcon("Thunder")
   } else if (code === "300" || "301" || "302" || "500" || "501" || "511" || "520" || "502" || "521") {
      setIcon("Rain")
   } else if (code === "600" || "601" || "602" || "610" || "621" || "623" || "611" || "612") {
      setIcon("Snow")
    } else if (code === "700" || "711" || "721" || "731" || "741" || "751") {
      setIcon("Mist")
    } else if (code === "800") {
      setIcon("Sun")
   } else if (code === "801" || "802" || "803" || "804") {
      setIcon("Few Clouds")
    } else (code === "900") {
      setIcon("Unknown Precipitation")
    }
  }

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

  useEffect(() => {
    console.log(weatherCode);
    dynamicSwitch(weatherCode);
    console.log(data);
  }, [weatherCode, data]);

  return (
    <div className="weather">
      <div className="weatherdiv">
        <div className="weathericon">
          <p>
            <DynamicSvg icon={icon} />
          </p>
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

// const dynamicSwitch = code => {
//   switch (true) {
//     case "200" || "201" || "202" || "230" || "231" || "232" || "230":
//       return setIcon("thundercloud");
//     case "300" ||
//       "301" ||
//       "302" ||
//       "500" ||
//       "501" ||
//       "511" ||
//       "520" ||
//       "502" ||
//       "521" ||
//       "900":
//       return setIcon("raincloud");
//     case "600" || "601" || "602" || "610" || "621" || "623" || "611" || "612":
//       return setIcon("snowcloud");
//     case "700" || "711" || "721" || "731" || "741" || "751":
//       return setIcon("windycloud");
//     case "801" || "802" || "803" || "804":
//       return setIcon("suncloud");
//     default:
//       return setIcon("sunshine");
//   }
// };
