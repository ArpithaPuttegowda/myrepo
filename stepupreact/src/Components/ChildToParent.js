import React from "react";
export class Parent extends React.Component {
  getData = (d) => {
    console.log(d, "getting data from child ");
  };
  render() {
    return (
      <div>
        I'm Parent
        <h1>
          <Child fn={this.getData} />
        </h1>
      </div>
    );
  }
}

class Child extends React.Component {
  constructor() {
    super();
    this.myData = "MUMBAI";
  }
  handleClick = () => {
    this.props.fn(this.myData);
  };
  render() {
    return (
      <div>
        I'm Child
        <button onClick={this.handleClick}>
          TO Pass data from CHild to Parent
        </button>
      </div>
    );
  }
}
