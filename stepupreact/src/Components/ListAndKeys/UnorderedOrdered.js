import React, {Component} from "react";

export default class UnorderedOrdered extends Component {
  constructor() {
    super();
    this.data = ["pink", "red", "blue", "yellow", "white"];
  }
  render() {
    return (
      <div>
        <ul>
          {this.data.map((v, i) => {
            return <li key={v + i}>{v}</li>;
          })}
        </ul>
      </div>
    );
  }
}
