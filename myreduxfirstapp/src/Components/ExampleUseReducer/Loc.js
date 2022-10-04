import React, {useContext, useRef} from "react";
import {ctx} from "./createContex";

export const Loc = () => {
  const locRef = useRef();
  const data = useContext(ctx);

  const handleName = () => {
    const loc = locRef.current.value;
    data[1]({
      case: "LOC",
      payload: loc
    });
    locRef.current.value = "";
  };
  return (
    <div>
      <input ref={locRef} />
      <button onClick={handleName}>Loc</button>
    </div>
  );
};
