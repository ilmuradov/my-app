import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProfileMatch from './components/Profile/ProfileContainer';
import Home from './components/Home/HomeContainer';
import Messages from './components/Messages/MessagesContainer';
import Settings from './components/Settings/SettingsContainer';
import Users from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import Header from './components/Header/HeaderContainer';
import './App.css'

const App = () => {

    return (
        <div className='app-wrapper'>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/profile/*' element={<ProfileMatch />} />
                    <Route path='/messages' element={<Messages />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/users' element={<Users />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </div>
                <Header />
        </div>
    );

}

export default App;