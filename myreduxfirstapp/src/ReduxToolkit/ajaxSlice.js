import {createSelector, createSlice} from "@reduxjs/toolkit";
import {AJAX} from "./constant";

const initData = {
  data: []
};

const ajaxSlice = createSlice({
  initialState: initData,
  name: AJAX,
  reducers: {
    setData: (state, action) => {
      console.log(action.payload, "100 records");
      state.data = action.payload;
    }
  }
});

export const {setData} = ajaxSlice.actions;

const selectSelf = (state) => state;
export const geData = createSelector(
  selectSelf,
  ({ajaxSliceRTK}) => ajaxSliceRTK.data
);

export default ajaxSlice.reducer;
