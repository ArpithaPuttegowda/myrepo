import React, {useContext} from "react";
import {ctx} from "./createContex";

export const NameLoc = () => {
  const data = useContext(ctx);
  return (
    <div>
      <h1>Name:{data[0]?.name}</h1>
      <h1>Loc:{data[0]?.loc}</h1>
    </div>
  );
};
