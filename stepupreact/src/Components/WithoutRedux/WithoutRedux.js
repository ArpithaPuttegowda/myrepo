import React, {useState} from "react";
import {A} from "./A";
import {B} from "./B";
import {C} from "./C";

const WithoutRedux = () => {
  const [name, setName] = useState("");
  const [loc, setLoc] = useState("");
  const getName = (myName) => {
    setName(myName);
  };
  const getLoc = (myLoc) => {
    setLoc(myLoc);
  };
  return (
    <div>
      <A f1={getName} />
      <B f2={getLoc} />
      <C n={name} l={loc} />
    </div>
  );
};
export default WithoutRedux;
