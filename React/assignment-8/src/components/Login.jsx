import React, { Component } from "react";
import Todo from "./Todo";
import "./Login.css";
import Signup from "./Signup";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLogged: false,
      isSignup: false,
    };
  }
  handleSignup = () => {
    this.setState({
      isSignup: true,
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  getSingleUser = () => {
    if (localStorage.getItem("users")) {
      const localUsers = JSON.parse(localStorage.getItem("users"));
      console.log(localUsers, "localUsers");
      const singleUser = localUsers.find(
        (item) => item.username === this.state.username
      );
      console.log(singleUser, "singleUser");
      return singleUser;
    }
  };

  inputValidation = () => {
    if (!this.state.username || !this.state.password) {
      alert("Please enter username and password");
      return false;
    }
    return true;
  };

  handleLogin = () => {
    if (!this.inputValidation()) {
      return;
    }

    const singleUser = this.getSingleUser();

    if (singleUser.password === this.state.password) {
      this.setState({
        isLogged: true,
      });
    } else {
      alert("Please enter valid credentials");
    }
  };

  render() {
    console.log(this.state);
    if (this.state.isSignup) {
      return <Signup />;
    }

    return this.state.isLogged ? (
      <Todo />
    ) : (
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-input-div">
          <input
            className="login-input"
            type="email"
            placeholder="Enter username"
            name="username"
            id="username"
            required
            onChange={this.handleChange}
          />
        </div>
        <div className="login-input-div">
          <input
            className="login-input"
            id="password"
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            onChange={this.handleChange}
          />
        </div>
        <button
          className="login-button"
          onClick={this.handleLogin}
          type="submit"
        >
          Login
        </button>
        <div className="signup-toggle">
          Don't have an account?
          <button className="signup-button" onClick={this.handleSignup}>
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}
