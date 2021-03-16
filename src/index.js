import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import state, {addMessage, addPost, updateMessageText, updatePostText, subscribe} from "./redux/state";


const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
        <App state={ state }
             addPost={ addPost }
             updatePostText={ updatePostText }
             updateMessageText={ updateMessageText }
             addMessage={ addMessage }/>
        </BrowserRouter>, document.getElementById('root'));
}


subscribe( rerenderEntireTree )

rerenderEntireTree(state)





