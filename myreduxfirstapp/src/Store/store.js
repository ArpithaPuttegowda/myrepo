import {configureStore} from "@reduxjs/toolkit";
import {nameLocReducer} from "../Reducers/nameLocReducer";
import {nameLoc} from "../Reducers/nameLocReducerClass";

const rootReducer = {
  nameLocReducer: nameLocReducer,
  nameLocClass: nameLoc
};

const store = configureStore({
  reducer: rootReducer
});

export default store;
