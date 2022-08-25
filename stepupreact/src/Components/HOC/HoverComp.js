import React, {Component} from "react";
import {myHOC} from "./myHOC";

class HoverComp extends Component {
  render() {
    return <h1 onMouseOver={this.props.myFn}>Inc Count{this.props.myCount}</h1>;
  }
}

export default myHOC(HoverComp);
