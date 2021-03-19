import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReduce";
import sidebarReduce from "./sidebarReduce";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReduce
});

let store = createStore(reducers);

window.store = store

export default store;