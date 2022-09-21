import { combineReducers } from "redux";
import storeReducer from "./storeReducer";
import modalReducer from "./modalReducer";

const allReducers = combineReducers({
    store: storeReducer,
    modal: modalReducer,
});

export default allReducers;