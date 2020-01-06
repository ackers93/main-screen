import React from "react";

const Weather = props => {
  console.log(props);
  return <div className="weather">34°17'13.4"N 118°52'06.4"W</div>;
};

export default Weather;

// https://www.metaweather.com/api/location/search/?lattlong=>34.28,118.88
