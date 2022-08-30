import React, {Component} from "react";

export default class LifeCycleMethod extends Component {
  //2 args,props as a first arg
  constructor(myProps) {
    super();
    console.log("constructor", myProps.myName, myProps.loc);
    this.state = {
      color: "red",
      data: 100,
      count: 0
    };
  }

  //2 args
  static getDerivedStateFromProps(nexProps, nextState) {
    if (nextState.count === 3) {
      return {
        color: "blue"
      };
    }
  }

  render() {
    console.log("render");
    return (
      <div>
        <button onClick={() => this.setState({count: this.state.count + 1})}>
          incCount{this.state.count}
        </button>
        <h1>{this.state.color}</h1>
      </div>
    );
  }
  componentDidMount() {
    debugger;
    console.log("componentDidMount");
  }
}
