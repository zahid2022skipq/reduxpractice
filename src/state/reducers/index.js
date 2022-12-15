import { combineReducers } from "redux";

import actionReducer from "./reducers";

export const reducer = combineReducers({ amount: actionReducer });
