import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

 const reducers = combineReducers({
    allAlbums: productReducer,
});

export default reducers;
