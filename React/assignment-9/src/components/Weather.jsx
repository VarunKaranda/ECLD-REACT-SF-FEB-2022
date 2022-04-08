import React, { Component } from "react";
import "./Weather.css";
import axios from "axios";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      city: "",
      temp: "",
      press: "",
      clouds: "",
      wind: "",
    };
  }
  handleChange = (event) => {
    console.log(event.target.value);
    const { value } = event.target;
    this.setState({
      input: value,
    });
  };
  handleClick = () => {
    if (this.state.input) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&appid=fd2be4bb19fc6e8a08baa952595778b2`
        )
        .then((result) => {
          console.log(result, "result");
          this.setState({
            city: result.data.name,
            temp: result.data.main.temp,
            press: result.data.main.pressure,
            clouds: result.data.clouds.all,
            wind: result.data.wind.speed,
            input:""
          });
        })
        .catch((error) => console.log(error));
    }
  };

  render() {
    console.log(this.state);
    return (
      <>
        <div className="container">
          <input
            className="input"
            type="text"
            placeholder="Enter the city name"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Search</button>
        </div>
        <div>
          {this.state.city ? (
            <div className="weather">
              <h1>{this.state.city}</h1>
              <p>Temperature: {Math.round(this.state.temp - 273.15)}&#8451;</p>
              <p>Pressure: {this.state.press} hPa</p>
              <p>Clouds: {this.state.clouds}%</p>
              <p>Wind: {this.state.wind} m/s</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}
