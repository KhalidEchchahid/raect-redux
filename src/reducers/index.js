import React from "react";
import counterReducer from "./counter";
import loggedReducer from "./loged";
import { combineReducers } from "redux";

const allReducer = combineReducers({
    counter : counterReducer ,
    isLogged : loggedReducer 
})

export default allReducer

