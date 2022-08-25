import React from "react";

export const myHOC = (Comp) => {
  class MyLogic extends React.Component {
    state = {
      count: 0
    };
    handleClick = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1
      }));
    };
    render() {
      return (
        <div>
          <Comp myCount={this.state.count} myFn={this.handleClick} />
        </div>
      );
    }
  }
  return MyLogic;
};
