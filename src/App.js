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
        <header>
          <link
            rel="stylesheet"
            href="https://use.typekit.net/jqb5edi.css"
          ></link>
        </header>
        <Directory />
        <div className="bottom-div">
          <TimeDate />
          <Weather />
        </div>
        <footer>
          <img src="./images/background.png"></img>
        </footer>
      </div>
    );
  }
}

export default App;
