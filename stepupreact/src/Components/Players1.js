import React, {Component} from "react";

export default class Players1 extends Component {
  render() {
    return (
      <div>
        I'm {this.props?.name?.length}, I'm from {this.props.loc}
      </div>
    );
  }
}
