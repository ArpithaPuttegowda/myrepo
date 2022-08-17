import React, {Component} from "react";

export default class ContextExample extends Component {
  constructor() {
    super();
    this.myData = "MUMBAI";
  }
  render() {
    return (
      <div>
        <A data={this.myData} />
      </div>
    );
  }
}

class A extends Component {
  render() {
    return (
      <div>
        <B mD={this.props.data} />
      </div>
    );
  }
}

class B extends Component {
  render() {
    return <C data={this.props.mD} />;
  }
}
class C extends Component {
  render() {
    return <D d={this.props.data} />;
  }
}
class D extends Component {
  render() {
    console.log(this, "current");
    return <h1>I'm D Component:::::{this.props.d}</h1>;
  }
}
