import {Component} from "react";

class BoxC extends Component {
  render() {
    console.log(this, "current object");
    return (
      <div id="boxC">
        {this.props.n}
        {this.props["l"]}
      </div>
    );
  }
}

export default BoxC;
