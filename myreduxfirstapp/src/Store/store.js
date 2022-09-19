import {configureStore} from "@reduxjs/toolkit";
import {nameLocReducer} from "../Reducers/nameLocReducer";

const rootReducer = {
  nameLocReducer: nameLocReducer
};

const store = configureStore({
  reducer: rootReducer
});

export default store;
