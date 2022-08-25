import React from "react";
import {useInc} from "./useInc";

export const Hover = () => {
  const [count, handleInc] = useInc();
  return <h1 onMouseOver={handleInc}>Inc{count}</h1>;
};
