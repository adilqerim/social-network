import React, {Suspense} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

// import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import Login from "./components/Login/Login";
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                        <Suspense fallback={<div>Загрузка...</div>}>
                            <Switch>
                            <Redirect exact from="/" to="/profile"/>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/news' component={News}/>
                            <Route path='/music' component={Music}/>
                            <Route path='/settings' component={Settings}/>
                            <Route path='/login' component={Login}/>
                            <Route path='*' render={() => <div>404 Not Found</div>}/>
                            </Switch>
                        </Suspense>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);

