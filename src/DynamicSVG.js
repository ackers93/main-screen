import React from "react";

import {
  RainCloud,
  SnowCloud,
  SunCloud,
  Sunshine,
  ThunderCloud,
  WindyCloud
} from "./components/WeatherSVG";

const components = {
  raincloud: RainCloud,
  snowcloud: SnowCloud,
  suncloud: SunCloud,
  sunshine: Sunshine,
  thundercloud: ThunderCloud,
  windycloud: WindyCloud
};

export function DynamicSvg(props) {
  const WeatherIcon = components[props.icon];
  return <WeatherIcon />;
}
