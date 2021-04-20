import React, {Suspense} from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter, HashRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/reduxStore";
import {Provider} from "react-redux";


ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    , document.getElementById('root'));







