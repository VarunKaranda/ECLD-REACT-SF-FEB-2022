import React, { Component } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "../context/AuthContextProvider";
import Login from "./Login"
import "./Details.css"

export default class Details extends Component {
  render() {
    const {isAuth} = this.context
    if (!isAuth) {
       return <Login/>
    }
    console.log(this.context.responseData);
    return (
      <>
        <Navbar />
        <div details-container>
          <h1>Hi Eve</h1>
          <h2>
            You are logged In with a token
            <span className="data-details"> {this.context.responseData}</span>
          </h2>
        </div>
      </>
    );
  }
} 

Details.contextType = AuthContext;
