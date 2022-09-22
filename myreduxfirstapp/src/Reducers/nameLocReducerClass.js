import {initDataClass} from "../Utils/inits";

export const nameLoc = (state = initDataClass, action) => {
  switch (action.type) {
    case "NAME_CLASS":
      state = {
        ...state,
        name: action.name
      };
      break;
    case "LOC_CLASS":
      state = {
        ...state,
        loc: action.payload
      };
      break;
    default:
      return state;
  }
  console.log(state, "state");
  return state;
};
