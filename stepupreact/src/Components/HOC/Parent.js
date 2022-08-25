import React, {Component} from "react";
import ButtonComp from "./ButtonComp";
import HoverComp from "./HoverComp";

export default class Parent extends Component {
  render() {
    return (
      <div>
        <HoverComp />
        <ButtonComp />
      </div>
    );
  }
}
