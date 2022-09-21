import React, {Component, createRef} from "react";
// import store from "../../Store/store";
import {connect} from "react-redux";

class AClass extends Component {
  constructor() {
    super();
    this.nameRef = createRef();
  }
  handleName = () => {
    let name = this.nameRef.current.value;
    this.props.d({
      type: "NAME_CLASS",
      name
    });

    // store.dispatch({
    //   type: "NAME",
    //   payload: name
    // });
  };

  render() {
    return (
      <div>
        <input ref={this.nameRef} />
        <button onClick={this.handleName}>Name</button>
      </div>
    );
  }
}

const mdp = (dispatch) => {
  return {
    d: dispatch
  };
};
// const msp = (state) => {
//   return {
//     name: state.nameLocClass.name,
//     location: state.nameLocClass.loc
//   };
// };
export default connect(null, mdp)(AClass);
