import React, {Component} from "react";

export default class ArgumentsOfSetState extends Component {
  state = {
    count: 0
  };
  handleIncCount = () => {
    this.setState((prev) => {
      return {
        count: prev.count + 1
      };
    });
  };
  handle5 = () => {
    this.handleIncCount();
    this.handleIncCount();
    this.handleIncCount();
    this.handleIncCount();
    this.handleIncCount();
  };
  render() {
    const {count} = this.state;
    return (
      <div>
        <button onClick={this.handleIncCount}>Inc Count</button>
        <button onClick={this.handle5}>inc 5</button>
        <h1>{count}</h1>
      </div>
    );
  }
}
