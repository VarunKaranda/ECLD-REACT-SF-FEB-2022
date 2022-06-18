import React, { Component } from "react";
import "./Navbar.css";
import { ThemeContext} from "../context/ThemeContextProvider"

export default class Navbar extends Component {
  render() {
    console.log(this.context);
    const { isThemed, toggleTheme } = this.context;
    

    return (
      <ul>
        <li onClick={toggleTheme} style={{ float: "right" }}>
          <a onClick={toggleTheme} className="active" href="#about">
            {isThemed ? "Dark Mode" : "Light Mode "}
          </a>
        </li>
      </ul>
    );
  }
}

Navbar.contextType = ThemeContext;
