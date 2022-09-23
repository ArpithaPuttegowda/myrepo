import React from "react";
import {useSelector} from "react-redux";
import {getLoc, getName} from "./nameLocSlice";

export const RenderNameLoc = () => {
  const name = useSelector(getName);
  const loc = useSelector(getLoc);
  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>Loc:{loc}</h1>
    </div>
  );
};
