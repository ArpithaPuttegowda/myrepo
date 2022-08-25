import React, {Component} from "react";
import {myHOC} from "./myHOC";

class ButtonComp extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.myFn}>Inc Count{this.props.myCount}</button>
      </div>
    );
  }
}
export default myHOC(ButtonComp);
