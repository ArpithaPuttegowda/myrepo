import {createSlice} from "@reduxjs/toolkit";

const registrationSlice = createSlice({
  name: "REG",
  initialState: {
    name: "",
    pwd: "",
    email: ""
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPWD: (state, action) => {
      state.pwd = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    }
  }
});

export const {setName, setPWD, setEmail} = registrationSlice.actions;

export default registrationSlice.reducer;
