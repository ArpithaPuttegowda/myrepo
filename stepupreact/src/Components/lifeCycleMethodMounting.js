import React, {Component} from "react";

export default class LifeCycleMethod extends Component {
  constructor() {
    super();
    console.log("constructor");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
  }
  render() {
    console.log("render");
    return <div>lifeCycleMethod</div>;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
}
