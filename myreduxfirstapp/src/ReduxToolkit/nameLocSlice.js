import {createSelector, createSlice} from "@reduxjs/toolkit";

const initData = {
  name: "",
  loc: ""
};
const nameLocSlice = createSlice({
  name: "nameLoc",
  initialState: initData,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setLoc: (state, action) => {
      state.loc = action.payload;
    }
  }
});

export const {setName, setLoc} = nameLocSlice.actions;

const selectSelf = (state) => state;

export const getName = createSelector(
  selectSelf,
  ({nLReducerRTK}) => nLReducerRTK.name
);

export const getLoc = createSelector(
  selectSelf,
  ({nLReducerRTK}) => nLReducerRTK.loc
);

export default nameLocSlice.reducer;
