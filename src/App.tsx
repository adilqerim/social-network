import React, {FC, Suspense} from 'react';
import {BrowserRouter, Link, Redirect, Route, Switch, withRouter} from 'react-router-dom'
import './App.css';
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import Header from "./components/Header/Header";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import store, {AppStateType} from "./redux/reduxStore";
import {UsersPage} from "./components/Users/UsersPage";
import {Login} from "./components/Login/Login";
import 'antd/dist/antd.css';
import {Button, Layout, Menu} from "antd";
import {NotificationOutlined, SettingOutlined ,SendOutlined, UserOutlined, TeamOutlined} from '@ant-design/icons';
import {Footer} from "antd/es/layout/layout";

const {Content, Sider} = Layout;
//LAZY LOADING
const Profile = React.lazy(() => import("./components/Profile/Profile"));
const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));


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

            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        style={{height: '100%', borderRight: 0}}
                    >
                        <Menu.Item key="3" icon={<TeamOutlined />}><Link to="/users">All Students</Link></Menu.Item>
                        <Menu.Item key="1" icon={<UserOutlined/>}><Link to="/profile">My Profile</Link></Menu.Item>
                        <Menu.Item key="2" icon={<SendOutlined />}><Link to="/dialogs">Messages</Link></Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{padding: '0 24px 24px'}}>
                    <Header />
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}>
                        <Suspense fallback={<div>Загрузка...</div>}>
                            <Switch>
                                <Redirect exact from="/" to="/profile"/>
                                <Route path='/profile/:userId?' render={() => <Profile/>}/>
                                <Route path='/dialogs' render={() => <Dialogs/>}/>
                                <Route path='/users' render={() => <UsersPage pageTitle={'Samurai'}/>}/>
                                <Route path='/news' component={News}/>
                                <Route path='/music' component={Music}/>
                                <Route path='/settings' component={Settings}/>
                                <Route path='/login' component={Login}/>
                                <Route path='*' render={() => <div>404 Not Found
                                    <Button type={"primary"}>hello</Button>
                                </div>}/>
                            </Switch>
                        </Suspense>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Samurai Social Network ©2021 Created by Adil</Footer>
                </Layout>
            </Layout>
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