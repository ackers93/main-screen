import React from "react";
import ReactDOM from "react-dom";

export class ClockDigits extends React.Component {
  constructor(props) {
    super(props);
  }

  formatNumber(number) {
    if (this.props.hours && number > 12) {
      number = number - 12;
    }

    if (number < 10) {
      number = "0" + number;
    }
    return number;
  }

  render() {
    return <span>{this.formatNumber(this.props.number)}</span>;
  }
}
