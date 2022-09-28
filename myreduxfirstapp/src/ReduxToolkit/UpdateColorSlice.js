import {createSlice} from "@reduxjs/toolkit";

const updateColorSlice = createSlice({
  name: "COLOR",
  initialState: {
    color: ""
  },
  reducers: {
    setColor: (state, action) => {
      console.log(action.payload, "my color");
      state.color = action.payload;
    }
  }
});

export const {setColor} = updateColorSlice.actions;

export default updateColorSlice.reducer;
