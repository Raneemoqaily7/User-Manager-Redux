import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {thunk}  from "redux-thunk";
import { Reducer } from "./Reducer";

const rootReducer = combineReducers({user:Reducer})

const Store = configureStore({reducer :rootReducer})
export default Store;