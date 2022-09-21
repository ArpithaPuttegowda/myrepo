import {initDataClass} from "../Utils/inits";

export const nameLoc = (state = initDataClass, action) => {
  switch (action.type) {
    case "NAME_CLASS":
      state = {
        ...state,
        name: action.name
      };
      break;
    default:
      return state;
  }
  console.log(state, "state");
  return state;
};
