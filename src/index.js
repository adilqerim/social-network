import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/reduxStore";
import {Provider} from "react-redux";

setInterval( () => {
    store.dispatch({ type: "FAKE" })
}, 1000)

ReactDOM.render(
    <BrowserRouter>
        <Provider store={ store }>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));







