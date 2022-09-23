import React from "react";
import {Loc} from "./Loc";
import {Name} from "./Name";
import {RenderNameLoc} from "./RenderNameLoc";

export const ReduxToolKitSample = () => {
  return (
    <div>
      <Name />
      <Loc />
      <RenderNameLoc />
    </div>
  );
};
