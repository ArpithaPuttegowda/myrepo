import React, {Component} from "react";

export default class GenericResuableClass extends Component {
  render() {
    return (
      <p>
        <select>
          {this.props.data?.map((v, i) => {
            return <option key={v + i}>{v}</option>;
          })}
        </select>
      </p>
    );
  }
}
