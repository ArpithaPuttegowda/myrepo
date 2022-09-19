import React, {useRef} from "react";
import {useDispatch} from "react-redux";

export const A = () => {
  const nameRef = useRef(null);
  const dispatch = useDispatch();
  const handleName = () => {
    dispatch({
      type: "NAME",
      payload: nameRef.current.value
    });
  };
  return (
    <div>
      <input ref={nameRef} />
      <button onClick={handleName}>Name</button>
    </div>
  );
};
