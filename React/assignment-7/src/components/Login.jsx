import React, { Component } from "react";
import Todo from "./Todo";
import "./Login.css";

const defaultUsername = "admin@admin.com";
const defaultPassword = "admin@admin";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLogged: false,
    };
  }

  render() {
    const change = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      });
    };
    const login = () => {
      if (
        this.state.username === defaultUsername &&
        this.state.password === defaultPassword
      ) {
        this.setState({
          isLogged: true,
        });
      } else {
        alert("Please provide correct Credentials");
      }
    };
    console.log(this.state);
    return this.state.isLogged ? (
      <Todo/>
    ) : (
      <div class="login-container">
        <h1>Login</h1>
        <div className="username input">
          <input
            placeholder="Enter the Username"
            type="email"
            name="username"
            required
            onChange={change}
          />
        </div>
        <div className="password input">
          <input
            placeholder="Enter the Password"
            type="password"
            name="password"
            required
            onChange={change}
          />
        </div>
        <button className="login-button" onClick={login}>Login</button>
      </div>
    );
  }
}
