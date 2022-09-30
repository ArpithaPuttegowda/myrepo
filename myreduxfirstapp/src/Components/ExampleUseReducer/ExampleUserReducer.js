import React, {useReducer} from "react";

const initialState = {
  count: 0,
  name: "arpitha"
};
const reducer = (state, action) => {
  if (action === "INC") {
    state = {...state, count: state.count + 1};
  }
  if (action === "DEC") {
    state = {...state, count: state.count - 1};
  }
  return state;
};
export const ExampleUserReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, "state useReducer");
  return (
    <div>
      <div>
        Count:{state.count}...name...{state.name}
        <button onClick={() => dispatch("INC")}>+</button>
        <button onClick={() => dispatch("DEC")}>-</button>
      </div>
    </div>
  );
};
