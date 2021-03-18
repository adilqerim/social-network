import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/reduxStore";


const rerenderEntireTree = (store) => {
    ReactDOM.render(
        <BrowserRouter>
        <App store={ store } />
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store)

store.subscribe(() => rerenderEntireTree(store) )






