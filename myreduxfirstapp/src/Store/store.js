import {configureStore} from "@reduxjs/toolkit";
import {nameLocReducer} from "../Reducers/nameLocReducer";
import {nameLoc} from "../Reducers/nameLocReducerClass";
import nameLocReducerRTK from "../ReduxToolkit/nameLocSlice";
import ajaxSlice from "../ReduxToolkit/ajaxSlice";
import registrationSlice from "../ReduxToolkit/RegistrationSlice";

const rootReducer = {
  nameLocReducer: nameLocReducer,
  nameLocClass: nameLoc,
  nLReducerRTK: nameLocReducerRTK,
  ajaxSliceRTK: ajaxSlice,
  registration: registrationSlice
};

const store = configureStore({
  reducer: rootReducer
});

export default store;
