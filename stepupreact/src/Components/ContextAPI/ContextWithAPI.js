import React, {Component} from "react";
import ErrorBoundary from "../ErrorHandling/ErrorBoundary";
import Hero from "../ErrorHandling/Hero";
import {ctx} from "./myCtx";

export default class ContextAPIExample extends Component {
  render() {
    return (
      <div>
        <ctx.Provider value={""}>
          <A />
          <ErrorBoundary>
            <Hero heroName="joker" />
          </ErrorBoundary>
        </ctx.Provider>
      </div>
    );
  }
}

class A extends Component {
  render() {
    return (
      <div>
        <B />
      </div>
    );
  }
}

class B extends Component {
  render() {
    return <C />;
  }
}
class C extends Component {
  render() {
    console.log(this);
    return (
      <div>
        I'm C Component::::{this.context.name}....
        <D />
      </div>
    );
  }
}
C.contextType = ctx;

class D extends Component {
  render() {
    console.log(this, "current");
    return (
      <h1>
        I'm D Component:::::
        <ctx.Consumer>{(data) => <h1>{data.name}</h1>}</ctx.Consumer>
      </h1>
    );
  }
}
