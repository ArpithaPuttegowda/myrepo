import React from "react";
import {UseCallbackReact} from "./UseCallbackReact";
import {UseMemoReact} from "./UseMemoReact";

const ExampleUseMemo = () => {
  return (
    <div>
      <UseMemoReact />
      <h1>
        <UseCallbackReact />
      </h1>
    </div>
  );
};

export default ExampleUseMemo;
