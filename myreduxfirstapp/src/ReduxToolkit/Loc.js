import React, {createRef, useRef} from "react";
import {useDispatch} from "react-redux";
import {setLoc} from "./nameLocSlice";

export const Loc = () => {
  const dispatch = useDispatch();
  const locRef = createRef(null);
  const handleName = () => {
    const loc = locRef.current.value;
    dispatch(setLoc(loc));
  };
  return (
    <div>
      <input ref={locRef} />
      <button onClick={handleName}>Loc</button>
    </div>
  );
};
