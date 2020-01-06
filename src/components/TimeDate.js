import React from "react";
import ReactDOM from "react-dom";
import { ClockDigits } from "./ClockDigits";

class TimeDate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      date: 0,
      month: 0,
      year: 0
    };
  }

  getTime = () => {
    var d = new Date(); // for now

    var h = d.getHours();
    var m = d.getMinutes();
    var ampm = h >= 12 ? "PM" : "AM";
    var date = d.getDate();
    var d = new Date();
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var n = month[d.getMonth()];
    let year = d.getFullYear();

    this.setState({
      hours: h,
      minutes: m,
      ampm: ampm,
      date: date,
      n: n,
      year: year
    });
  };

  render() {
    return (
      <div className="date-time">
        <div className="clock">
          <span className="hours">
            <ClockDigits number={this.state.hours} hours={true} />
          </span>
          <span className="seperator">:</span>
          <span className="minutes">
            <ClockDigits number={this.state.minutes} />
            <span className="ampm">{this.state.ampm}</span>
          </span>
        </div>
        <div className="date">
          <span className="day-of-month">{this.state.date}</span>
          <span className="month">{this.state.n}</span>
          <span className="year">{this.state.year}</span>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.getTime();
    this.interval = setInterval(this.getTime, 1000);
  }
}

export default TimeDate;
