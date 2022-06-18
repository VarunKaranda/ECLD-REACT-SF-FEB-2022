import React, { Component } from "react";
import "./Navbar.css";
import { AuthContext } from "../context/AuthContextProvider";

export default class Navbar extends Component {
  render() {
    const { toggleAuth, isAuth } = this.context;
    console.log(this.context);

    return (
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li onClick={toggleAuth} style={{ float: "right" }}>
          <a className="active" href="#about">
            {isAuth ? "Logout" : "Login "}
          </a>
        </li>
      </ul>
    );
  }
}

Navbar.contextType = AuthContext;
