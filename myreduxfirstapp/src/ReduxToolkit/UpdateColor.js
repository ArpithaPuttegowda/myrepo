import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import {setColor} from "./UpdateColorSlice";

export const UpdateColor = () => {
  const dispatch = useDispatch();
  const colorRef = useRef(null);
  const handleColorChange = () => {
    let color = colorRef.current.value;
    colorRef.current.value = "";
    dispatch(setColor(color));
  };
  return (
    <div>
      <input ref={colorRef} />
      <button onClick={handleColorChange}>Update color</button>
    </div>
  );
};
