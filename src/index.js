import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/reduxStore";
import StoreContext from "./StoreContext";


const rerenderEntireTree = (store) => {

    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={ store }>
                <App />
            </StoreContext.Provider>
        </BrowserRouter>, document.getElementById('root'));
}


rerenderEntireTree(store)

store.subscribe(() => rerenderEntireTree(store) )






