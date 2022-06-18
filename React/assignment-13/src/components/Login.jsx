import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      token: "",

      //   isSignUp: false,
    };
  }
  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleClick = () => {
    console.log("Clicked");
  };
  // validation() {
  //     (<div></div>)
  // }

  render() {
    console.log(this.state);
    // } else {
    //     alert("Invalid")
    // }

    return (
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-input-div">
          <input
            className="login-input"
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div className="login-input-div">
          <input
            className="login-input"
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleChange}
          />
        </div>
        <button className="login-button" onClick={this.handleClick}>
          Login
        </button>
      </div>
    );
  }
}
