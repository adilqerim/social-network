import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReduce";
import sidebarReduce from "./sidebarReduce";
import usersReduce from "./usersReduce";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReduce,
    sidebar: sidebarReduce
});

let store = createStore(reducers);

window.store = store

export default store;