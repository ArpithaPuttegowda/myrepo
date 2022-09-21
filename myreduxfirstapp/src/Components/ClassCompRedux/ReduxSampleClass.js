import React, {Component} from "react";
import AClass from "./AClass";
import BClass from "./BClass";
import CClass from "./CClass";

export default class ReduxSampleClass extends Component {
  render() {
    return (
      <div>
        <AClass />
        <BClass />
        <CClass />
      </div>
    );
  }
}
