import React from "react";
import {useSelector} from "react-redux";
import store from "../Store/store";

export const C = () => {
  const state = useSelector((state) => state);
  const name = useSelector((state) => state?.nameLocReducer?.name);
  const totalState = store.getState();

  console.log(totalState, "totalState");
  return (
    <div>
      <h1>Name:{state?.nameLocReducer?.name}</h1>
      <h1>Name:{name}</h1>
      <h1>Loc:{totalState.nameLocReducer.loc}</h1>
    </div>
  );
};
