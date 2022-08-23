import React, {PureComponent} from "react";

export default class ReactPureComponent extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: "sachin"
    };
  }
  render() {
    alert("render called");
    return (
      <div>
        ReactPureComponent....{this.state.name}
        <button onClick={() => this.setState({name: "sachin"})}>
          change name
        </button>
      </div>
    );
  }
}
