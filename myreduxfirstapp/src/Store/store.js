import {configureStore} from "@reduxjs/toolkit";
import {nameLocReducer} from "../Reducers/nameLocReducer";
import {nameLoc} from "../Reducers/nameLocReducerClass";
import nameLocReducerRTK from "../ReduxToolkit/nameLocSlice";
import ajaxSlice from "../ReduxToolkit/ajaxSlice";
import registrationReducer from "../ReduxToolkit/RegistrationSlice";
import updateColorReducer from "../ReduxToolkit/UpdateColorSlice";

const rootReducer = {
  nameLocReducer: nameLocReducer,
  nameLocClass: nameLoc,
  nLReducerRTK: nameLocReducerRTK,
  ajaxSliceRTK: ajaxSlice,
  registration: registrationReducer,
  updateColorReducer
};

const store = configureStore({
  reducer: rootReducer
});

export default store;
