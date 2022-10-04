import React, {useContext} from "react";
import {ctx} from "./createContex";
import {Loc} from "./Loc";
import {Name} from "./Name";
import {NameLoc} from "./NameLoc";

export const RenderData = () => {
  const data = useContext(ctx);
  return (
    <div>
      <Name />
      <Loc />
      <button
        onClick={() =>
          data[1]({
            case: "CLEAR"
          })
        }
      >
        ClearData
      </button>
      <NameLoc />
    </div>
  );
};
