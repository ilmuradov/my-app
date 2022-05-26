import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProfileMatch from './components/Profile/ProfileContainer';
import Home from './components/Home/HomeContainer';
import Messages from './components/Messages/MessagesContainer';
import Settings from './components/Settings/SettingsContainer';
import Users from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import Header from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import './App.css'
import { compose } from 'redux';
import { connect } from 'react-redux';

const App = (props) => {

    return (
        <div className={props.night ? 'app-wrapper' : 'app-wrapper-day'}>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/' element={<ProfileMatch />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/profile/*' element={<ProfileMatch />} />
                    <Route path='/messages/*' element={<Messages />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/users' element={<Users />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/activity' element={<Music />} />
                </Routes>
            </div>
                <Header />
        </div>
    );

}

const maStateToProps = (state) => ({
    night: state.settings.night
})

export default compose(
    connect(maStateToProps)
)(App);