import React, { Component } from "react";
import "./Signup.css";
import Login from "./Login";

const users = []

export default class signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      department: "",
      address: "",
      married: false,
      username: "",
      password: "",
      cpassword: "",
      isLoggedIn: false,
    };
  }
  render() {
    const change = (event) => {
      const { name, value, checked } = event.target;
      const newValue = name === "married" ? checked : value;
      this.setState({
        [name]: newValue,
      });
    };
    const submit = (event) => {
      console.log(this.state);
      users.push(this.state)
      console.log(users);
      event.preventDefault();
      const { password, cpassword } = this.state;
      
      if (password === cpassword) {
        localStorage.setItem("users",JSON.stringify(users));
        this.setState({
          isLoggedIn: true,
          name: "",
          age: "",
          department: "",
          address: "",
          married: false,
          username: "",
          password: "",
          cpassword: "",
        });
        alert("Account Created");
        console.log(this.state);
      } else {
        alert("Password doesn't Match");
      }
    };
    const loginToggle = () => {
      this.setState({
        isLoggedIn: true,
      });
    };

    if (this.state.isLoggedIn) {
      return <Login />;
    }

    return (
      <div className="signup-container">
        <h1>Create an Account</h1>
        <form onSubmit={submit}>
          <div className="input-div">
            <input
              className="signup-input"
              type="text"
              placeholder="Full Name"
              name="name"
              value={this.state.name}
              onChange={change}
              required
            />
          </div>
          <div className="input-div">
            <input
              className="signup-input"
              type="text"
              placeholder="Age"
              name="age"
              value={this.state.age}
              onChange={change}
              required
            />
          </div>
          <div className="input-div">
            <select
              className="signup-input"
              name="department"
              value={this.state.department}
              onChange={change}
              required
            >
              <option value="">Select the Department</option>
              <option>Marketing</option>
              <option>HR</option>
              <option>Finance</option>
              <option>IT</option>
            </select>
          </div>
          <div className="input-div">
            <textarea
              className="input-address"
              name="address"
              cols="32"
              rows="5"
              placeholder="Address"
              value={this.state.value}
              onChange={change}
              required
            ></textarea>
          </div>
          <div className="input-div">
            <label htmlFor="">
              <input
                className="signup-checkbox"
                type="checkbox"
                name="married"
                checked={this.state.married}
                onChange={change}
              />
              Married
            </label>
          </div>
          <div className="input-div">
            <input
              className="signup-input"
              type="email"
              name="username"
              placeholder="Your Username in email format"
              value={this.state.username}
              onChange={change}
              required
            />
          </div>
          <div className="input-div">
            <input
              className="signup-input"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={change}
              required
            />
          </div>
          <div className="input-div">
            <input
              className="signup-input"
              type="password"
              name="cpassword"
              placeholder="Confirm Password"
              value={this.state.cpassword}
              onChange={change}
              required
            />
          </div>
          <div>
            <input type="submit" value="Sign Up" className="input-button" />
          </div>
          <div>
            Already have Account? <button onClick={loginToggle}>Login</button>
          </div>
        </form>
      </div>
    );
  }
}
