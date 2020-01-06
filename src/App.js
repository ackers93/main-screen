import React from "react";
import Directory from "./components/Directory";
import TimeDate from "./components/TimeDate";
import Weather from "./components/Weather";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Directory />
        <div className="bottom-div">
          <TimeDate />
          <Weather />
        </div>
      </div>
    );
  }
}

export default App;
