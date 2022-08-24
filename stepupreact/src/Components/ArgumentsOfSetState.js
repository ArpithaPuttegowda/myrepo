import React, {Component} from "react";

export default class ArgumentsOfSetState extends Component {
  state = {
    count: 0,
    name: ""
  };
  handleIncCount = () => {
    this.setState(
      {
        count: this.state.count + 1,
        name: "HYDERABAD"
      },
      () => {
        console.log(this.state.count, "count inside setstate");
      }
    );

    console.log(this.state.count, "count outside setstate");
  };
  render() {
    const {count, name} = this.state;
    return (
      <div>
        <button onClick={this.handleIncCount}>Inc Count</button>
        <h1>
          {count}...{name}
        </h1>
      </div>
    );
  }
}
