import React, {Component} from "react";

export default class Count extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  incCount = () => {
    this.setState({
      count: this.state.count + 1
    });
    // this.state.count=this.state.count+1
    // this.render()
  };

  render() {
    return (
      <div>
        <button onClick={this.incCount}>INC COUNT</button>
        <h1>COUNT...{this.state.count}</h1>
      </div>
    );
  }
}
