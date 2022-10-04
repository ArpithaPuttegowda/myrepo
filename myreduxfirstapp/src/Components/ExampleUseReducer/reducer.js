export const reducer = (state, action) => {
  if (action.case === "NAME") {
    state = {...state, name: action.name};
  }
  if (action.case === "LOC") {
    state = {...state, loc: action.payload};
  }
  if (action.case === "CLEAR") {
    state = {...state, name: "", loc: ""};
  }
  return state;
};
