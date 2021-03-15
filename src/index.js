import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const dialogs = [
    {id: 1, name: 'Mops'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Valya'},
    {id: 4, name: 'Alla'},
    {id: 5, name: 'Dima'}
]

const messages = [
    {id: 1, text: 'Hello)'},
    {id: 2, text: 'Long to no see!'},
    {id: 3, text: 'How you doing?'},
    {id: 4, text: 'Hey, I am great'},
    {id: 5, text: 'Thank you'}
]

const posts = [
    {id: 1, text: 'HEY)', likesCount: 5},
    {id: 2, text: 'WHAT TIME IS IT?', likesCount: 6}
]


ReactDOM.render(<App dialogs={dialogs} messages={messages} posts={posts}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
