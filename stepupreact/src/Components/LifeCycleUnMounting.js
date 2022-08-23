import React, {Component} from "react";

export default class LifeCycleUnMounting extends Component {
  state = {
    isChild: true
  };
  handleToggle = () => {
    this.setState({
      isChild: !this.state.isChild
    });
  };

  render() {
    return (
      <div>
        {this.state.isChild && <Child name={this.state.isChild} />}
        <button onClick={this.handleToggle}>Toggle</button>
      </div>
    );
  }
}

class Child extends Component {
  // unMountingPhase
  componentWillUnmount() {
    alert("componentWillUnmount");
  }
  render() {
    return <div>I'm CHild</div>;
  }
}

//Exception Handling or Error Handling
//static getDerivedStateFromError()
//componentDidCatch()
