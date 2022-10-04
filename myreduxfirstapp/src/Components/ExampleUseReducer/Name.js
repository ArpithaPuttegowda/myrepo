import React, {useContext, useRef} from "react";
import {ctx} from "./createContex";

export const Name = () => {
  const nameRef = useRef();
  const data = useContext(ctx);
  const handleName = () => {
    const name = nameRef.current.value;
    data[1]({
      case: "NAME",
      name
    });
    nameRef.current.value = "";
  };
  return (
    <div>
      <input ref={nameRef} />
      <button onClick={handleName}>Name</button>
    </div>
  );
};
