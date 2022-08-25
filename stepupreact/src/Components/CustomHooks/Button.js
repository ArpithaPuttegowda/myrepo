import React from "react";
import {useInc} from "./useInc";

export const Button = () => {
  const [c, fn] = useInc();
  return (
    <div>
      <button onClick={fn}>Inc{c}</button>
    </div>
  );
};
