import {initialData} from "../Utils/inits";

const nameLocReducer = (state = initialData, action) => {
  if (action.type === "NAME") {
    state = {
      ...state,
      name: action.payload
    };
  }
  console.log(state, "updated state");
  return state;
};

export {nameLocReducer};
