import React, {Component, createRef} from "react";

export default class TakeTheDataC extends Component {
  constructor() {
    super();
    this.state = {
      result: 0,
      cls: "cr"
    };
    this.n1Ref = createRef();
    this.n2Ref = createRef();
    this.n3Ref = createRef();
  }
  handleClick = () => {
    let n1 = this.n1Ref.current.value;
    let n2 = this.n2Ref.current.value;
    let n3 = this.n3Ref.current.value;
    this.n1Ref.current.value = "";
    this.n2Ref.current.value = "";
    this.n3Ref.current.value = "";
    let sum = Number(n1) + Number(n2) + Number(n3);
    this.setState({
      result: sum,
      cls: sum > 100 ? "cb" : "cp"
    });
  };
  render() {
    return (
      <div>
        <p>
          <b>No 1:</b>
          <input ref={this.n1Ref} type="number" />
        </p>
        <p>
          <b>No 2:</b>
          <input ref={this.n2Ref} type="number" />
        </p>
        <p>
          <b>No 3:</b>
          <input ref={this.n3Ref} type="number" />
        </p>
        <p>
          <button onClick={this.handleClick}>Sum</button>
        </p>
        <h1 style={{color: this.state.result > 100 ? "red" : "green"}}>
          SUM :{this.state.result}
        </h1>
        <h1 className={this.state.result > 100 ? "cr" : "cb"}>
          RESULT:{this.state.result}
        </h1>
        <h1 className={this.state.cls}>RESULT:{this.state.result}</h1>
      </div>
    );
  }
}
