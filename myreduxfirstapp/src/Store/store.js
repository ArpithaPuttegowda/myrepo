import {configureStore} from "@reduxjs/toolkit";
import {nameLocReducer} from "../Reducers/nameLocReducer";
import {nameLoc} from "../Reducers/nameLocReducerClass";
import nameLocReducerRTK from "../ReduxToolkit/nameLocSlice";

const rootReducer = {
  nameLocReducer: nameLocReducer,
  nameLocClass: nameLoc,
  nLReducerRTK: nameLocReducerRTK
};

const store = configureStore({
  reducer: rootReducer
});

export default store;
