import React, {Component} from "react";

export default class LifeCycleUpdating extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      count: 0
    };
  }
  handleInc = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  static getDerivedStateFromProps() {
    console.log("getDerivedFromProps");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    console.log("render");
    return (
      <div>
        <button onClick={this.handleInc}>Inc Count</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}
