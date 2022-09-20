import {initialData} from "../Utils/inits";

const nameLocReducer = (state = initialData, action) => {
  if (action.type === "NAME") {
    state = {
      ...state,
      name: action.payload
    };
  }
  if (action.type === "LOC") {
    state = {
      ...state,
      loc: action.payload
    };
  }
  if (action.type === "POSTS") {
    state = {
      ...state,
      data: action.data
    };
  }
  console.log(state, "updated state");
  return state;
};

export {nameLocReducer};
