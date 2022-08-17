import React, {useContext} from "react";
import {ctx} from "./myCtx";

export const MyContext = () => {
  return (
    <div>
      <ctx.Provider value={[1, 2, 3]}>
        <A />
      </ctx.Provider>
    </div>
  );
};
const A = () => {
  const data = useContext(ctx);
  return (
    <div>
      <h1>I'm A Component:::{data}</h1>
      <B />
    </div>
  );
};

const B = () => {
  return (
    <div>
      <C />
    </div>
  );
};
const C = () => {
  return (
    <div>
      <D />
      <h1>
        I'm C Component::{<ctx.Consumer>{(data) => data[2]}</ctx.Consumer>}
      </h1>
    </div>
  );
};

const D = () => {
  const data = useContext(ctx);
  return <div>I'm D Component:::{data[2]}</div>;
};
