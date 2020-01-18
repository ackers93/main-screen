import React from "react";
import Directory from "./components/Directory";
import TimeDate from "./components/TimeDate";
import Weather from "./components/Weather";
import "./App.css";
import footer from "./images/footer.png";

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
        <img className="footer" src={footer} />>
      </div>
    );
  }
}

export default App;
