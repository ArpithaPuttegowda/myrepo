import React, {Component} from "react";
import {connect} from "react-redux";
import store from "../../Store/store";

class CClass extends Component {
  render() {
    this.myState = store.getState();
    return (
      <div>
        <h1>Name:Connect::::::{this.props.name}</h1>
        <h1>Name:GetState:::::{this.myState.nameLocClass.name}</h1>
        <h1>Loc:{this.props.loc}</h1>
        <h1>{this.myState.nameLocClass.loc}</h1>
      </div>
    );
  }
}
const msp = (state) => {
  return {
    name: state.nameLocClass.name,
    loc: state.nameLocClass.loc
  };
};

export default connect(msp)(CClass);
