import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {addMessage, addPost} from "./redux/state";


const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage}
                                                         addPost={ props.addPost }
                                                         updatePostText={props.updatePostText}/> }/>
          <Route path='/dialogs' render={ () => <Dialogs dialogsPage={props.state.dialogsPage}
                                                         updateMessageText={props.updateMessageText}
                                                         addMessage={ props.addMessage }/>}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
  )
}

export default App;

