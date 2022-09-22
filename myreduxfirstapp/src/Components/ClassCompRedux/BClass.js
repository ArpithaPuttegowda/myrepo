import React, {Component, createRef} from "react";
import {connect} from "react-redux";

class BClass extends Component {
  constructor() {
    super();
    this.locRef = createRef();
  }
  handleLoc = () => {
    const loc = this.locRef.current.value;
    this.props.dispatch({
      type: "LOC_CLASS",
      payload: loc
    });
  };
  render() {
    return (
      <div>
        <input ref={this.locRef} />
        <button onClick={this.handleLoc}>Loc</button>
      </div>
    );
  }
}
const mdp = (dispatch) => {
  return {
    dispatch
  };
};
export default connect(null, mdp)(BClass);
