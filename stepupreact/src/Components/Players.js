import React, {Component} from "react";

class Players extends Component {
  render() {
    // this.props.loc = "DHONI"; prop is a immutable
    return (
      <div>
        <div>
          I'm {this.props.name}, I'm from {this.props.loc}
        </div>
      </div>
    );
  }
}

export default Players;
