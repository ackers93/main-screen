import React from "react";

const Directory = props => {
  console.log(props);
  return (
    <div className="directory">
      <h1>DIRECTORY</h1>
      <div className="both-floors">
        <div className="first-floor">
          <h3>FIRST FLOOR</h3>
          <h4>Accounting</h4>
          <h4>Call Center</h4>
          <h4>Human Resources</h4>
          <h4>Inventory Department</h4>
          <h4>Warehouse</h4>
        </div>

        <div className="second-floor">
          <h3>SECOND FLOOR</h3>
          <h4>Information Technology</h4>
          <h4>Marketing</h4>
          <h4>Networking</h4>
          <h4>Operations</h4>
          <h4>President</h4>
          <h4>Software Development</h4>
          <h4>Training</h4>
        </div>
      </div>
    </div>
  );
};
export default Directory;
