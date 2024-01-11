import React, { Component } from "react";

class Employees extends Component {
  render() {
    return (
      <div>
        <h1>Name: {this.props.details.name}</h1>
        <h2>empID: {this.props.details.empID}</h2>
        <h2>Designation: {this.props.details.designation}</h2>
      </div>
    );
  }
}

export default Employees;
