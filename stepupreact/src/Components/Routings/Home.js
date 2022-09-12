import React from "react";
import {ConditionalRendering} from "../ConditionalRendering";
import {TakeTheDataOnchange} from "../TakeTheDataOnchange";
import {WithoutJSX, WithoutJSX1} from "../WithoutJSX";

export const Home = () => {
  return (
    <div>
      <WithoutJSX />
      <WithoutJSX1 />

      <h1>
        <ConditionalRendering />
      </h1>
      <TakeTheDataOnchange />
    </div>
  );
};
