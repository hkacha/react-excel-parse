import thunkMiddleware from "redux-thunk";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducer from "./reducer";

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));
