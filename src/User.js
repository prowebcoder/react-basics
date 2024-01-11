import React, { Component } from "react";

class User extends Component {
  constructor() {
    super();
    this.state = {
      samagri: "Rahul",
    };
  }
  jankari() {
    this.setState({ samagri: "Shivansh" });
  }
  render() {
    console.log("User Reloaded");

    return (
      <div>
        <button onClick={() => this.jankari()}>Kripya Ungli Kare</button>
        <h1>Hello from User</h1>
        <h1>{this.state.samagri}</h1>
      </div>
    );
  }
}
export default User;
