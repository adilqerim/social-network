import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addMessage, addPost, updateMessageText, updatePostText} from "./redux/state";


const rerenderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter>
        <App state={ state } addPost={ addPost } updatePostText={ updatePostText } updateMessageText={ updateMessageText } addMessage={ addMessage }/>
    </BrowserRouter>, document.getElementById('root'));
}

export default rerenderEntireTree;