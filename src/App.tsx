import React, {FC, Suspense} from 'react';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import Header from "./components/Header/Header";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import store, {AppStateType} from "./redux/reduxStore";
//LAZY LOADING
const Profile = React.lazy(() => import("./components/Profile/Profile"));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));
const Login = React.lazy(() => import('./components/Login/Login'));


type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<div>Загрузка...</div>}>
                        <Switch>
                            <Redirect exact from="/" to="/profile"/>
                            <Route path='/profile/:userId?' render={() => <Profile/>}/>
                            <Route path='/dialogs' render={() => <Dialogs/>}/>
                            <Route path='/users' render={() => <UsersContainer pageTitle={'Samurai'}/>}/>
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

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

const AppContainer = compose<React.ComponentType>(connect(mapStateToProps, {initializeApp}),
    withRouter)(App);

const SocialNetworkApp: FC = () => {
    return <Provider store={store}>
        <BrowserRouter>
            <AppContainer/>
        </BrowserRouter>
    </Provider>
}

export default SocialNetworkApp