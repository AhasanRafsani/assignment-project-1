
import {combineReducers} from "@reduxjs/toolkit";
import { todoSlice } from "./slice/todoSlice";

export const rootReducer = combineReducers({

         todoReducer:todoSlice.reducer
     
});