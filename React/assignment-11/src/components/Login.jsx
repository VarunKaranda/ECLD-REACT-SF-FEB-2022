import React, { Component } from "react";
import "./Login.css";
import { AuthContext } from "../context/AuthContextProvider";
import Details from "./Details";
import axios from "axios";
import Navbar from "./Navbar"

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
  }
  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleClick = () => {
    const { setResponseData,toggleAuth } = this.context;
    axios
      .post("https://reqres.in/api/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        console.log(res);
        this.setState({
          responseData: res.data.token,
          isAuth:toggleAuth(),
        });
        setResponseData(this.state.responseData);
      })
      .catch((err) => {
        window.alert("Provide Correct Credentials");
        this.setState({ password: "" });
      });
  };

  render() {
    console.log(this.state);
    console.log(this.context);
    if (this.state.responseData) {
      return <Details />;
    }
    return (
      <>
        <Navbar/>
        <div className="login-container">
          <h1>Login</h1>
          <div className="login-input-div">
            <input
              className="login-input"
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
          </div>
          <div className="login-input-div">
            <input
              className="login-input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>
          <button className="login-button" onClick={this.handleClick}>
            Login
          </button>
        </div>
      </>
    );
  }
}

Login.contextType = AuthContext;
