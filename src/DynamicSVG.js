import React from "react";

import {
  RainCloud,
  SnowCloud,
  SunCloud,
  Sunshine,
  ThunderCloud,
  WindyCloud,
} from "./components/WeatherSVG";

const components = {
  raincloud: RainCloud,
  snowcloud: SnowCloud,
  suncloud: SunCloud,
  sunshine: Sunshine,
  thundercloud: ThunderCloud,
  windycloud: WindyCloud,
};

function DynamicSvg(props) {
  const WeatherIcon = components[props.icon];
  console.log(props);
  console.log(WeatherIcon);
  return (
    <div>
      <WeatherIcon className="icon" />
    </div>
  );
}

export default DynamicSvg;
