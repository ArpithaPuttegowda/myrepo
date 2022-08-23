import React, {Component} from "react";

export default class Hero extends Component {
  render() {
    // try {
    //   if (this.props.heroName === "joker") {
    //     throw new Error("Joker is not a hero");
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
    if (this.props.heroName === "joker") {
      throw new Error("Joker is not a hero");
    }
    console.log(this, "current object");
    return (
      <div>
        {this.props.heroName}...{this.props.children}
      </div>
    );
  }
}
