import React from "react";
import {useSelector} from "react-redux";

export const C = () => {
  const state = useSelector((state) => state);
  const name = useSelector((state) => state?.nameLocReducer?.name);
  console.log(state, "state");
  return (
    <div>
      <h1>Name:{state.nameLocReducer.name}</h1>
      <h1>Name:{name}</h1>
      <h1>Loc:</h1>
    </div>
  );
};
