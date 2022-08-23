// generic or resuable component

import React, {Component} from "react";

export default class ErrorBoundary extends Component {
  state = {
    isError: false
  };
  static getDerivedStateFromError() {
    alert("exception occured");
    return {
      isError: true
    };
  }
  componentDidCatch() {}
  render() {
    return (
      <>
        {this.state.isError ? (
          <h1>something went wrong</h1>
        ) : (
          this.props.children
        )}
      </>
    );
  }
}
