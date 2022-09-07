import React, {Component} from "react";

export default class InputClassResualbe extends Component {
  render() {
    return (
      <div>
        {this.props.lbl}:<input type={this.props.type} />
      </div>
    );
  }
}
