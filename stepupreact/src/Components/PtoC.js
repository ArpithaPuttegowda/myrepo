import React from "react";
class Parent extends React.Component {
  constructor() {
    super();
    this.name = "Sachin";
  }
  render() {
    const loc = "Mumbai";
    return (
      <div>
        I'm Parent
        <h1>
          <Child n={this.name} l={loc} />
        </h1>
      </div>
    );
  }
}
export default Parent;

class Child extends React.Component {
  render() {
    return (
      <div>
        I'm Child...{this.props.n}....{this.props.l}
      </div>
    );
  }
}
