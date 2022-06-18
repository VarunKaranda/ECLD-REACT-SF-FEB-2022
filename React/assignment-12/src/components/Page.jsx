import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import Navbar from "./Navbar";
import "./Page.css";

export default class Page extends Component {
    render() {
        const{isThemed}=this.context
      console.log(this.context);
    return (
      <div>
        <div className={isThemed ? "container" : "container-dark"}>
          <Navbar />
          <h1>Review Form</h1>
          <form action="/action_page.php">
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">First Name</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your First name.."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="lname">Last Name</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Your last name.."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="country">Country</label>
              </div>
              <div className="col-75">
                <select id="country" name="country">
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="subject">Review</label>
              </div>
              <div className="col-75">
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                  style={{ height: "200px" }}
                ></textarea>
              </div>
            </div>
            <br />
            <div className="row">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Page.contextType = ThemeContext;
