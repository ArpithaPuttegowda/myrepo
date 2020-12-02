import {createStore,applyMiddleware} from 'redux'
import {combineReducers} from "redux"
import {reducer as form} from 'redux-form'
const store=createStore(combineReducers({
    form
}),applyMiddleware())
export default store;