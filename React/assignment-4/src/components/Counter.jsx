import React from "react";
import styles from "./Counter.module.css";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }
  add = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };
  subtract = () => {
    if (this.state.value > 0) {
      this.setState({
        value: this.state.value - 1,
      });
    }
  };
  reset = () => {
    this.setState({
      value: 0,
    });
  };
  render() {
    return (
      <>
        <h1>{this.state.value}</h1>
        <button className={styles.add} onClick={this.add}>
          Add
        </button>
        <button className={styles.subtract} onClick={this.subtract}>
          Subtract
        </button>
        <button className={styles.reset} onClick={this.reset}>
          Reset
        </button>
      </>
    );
  }
}

export default Counter;
