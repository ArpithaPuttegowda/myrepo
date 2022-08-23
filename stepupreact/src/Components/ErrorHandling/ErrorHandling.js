import React, {Component} from "react";
import ErrorBoundary from "./ErrorBoundary";
import Hero from "./Hero";

export default class ErrorHandling extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Hero heroName="Hruthik">ishwarya</Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Sharukhan">kajal</Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Prabhas">arpitha</Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="jokerr"></Hero>
        </ErrorBoundary>
      </div>
    );
  }
}
