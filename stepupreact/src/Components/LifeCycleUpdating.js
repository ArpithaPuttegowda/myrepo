import React, {Component} from "react";

export default class LifeCycleUpdating extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      count: 0,
      name: "sachin"
    };
  }
  handleInc = () => {
    this.setState({
      count: this.state.count + 1,
      name: "sachinllld"
    });
  };
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("getDerivedFromProps");
  }

  shouldComponentUpdate(nexProps, nextState) {
    if (nextState.name !== this.state.name) {
      return true;
    }
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
  }
  componentDidUpdate(prevProps, prevState) {
    debugger;
    console.log("componentDidUpdate");
  }
  render() {
    alert("Render");
    return (
      <div>
        <button onClick={this.handleInc}>Inc Count......</button>
        <h1>
          {this.state.count}
          {this.state.name}
        </h1>
      </div>
    );
  }
}
