import React, { useState, useEffect } from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Music from '../components/Music/Music';
import UsersContainer from '../components/Users/UsersContainer';
import ProfileContainer from "../components/Profile/ProfileContainer";
import HeaderContainer from "../components/Header/HeaderContainer";
import HomeContainer from "../components/Home/HomeContainer";
import SettingsContainer from "../components/Settings/SettingsContainer";
import MessagesContainer from "../components/Messages/MessagesContainer";

const App = () => {

    return (
        <div className={'app-wrapper__night'}>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<ProfileContainer />} />
                    <Route path='/profile/*' element={<ProfileContainer />} />
                    <Route path='/messages' element={<MessagesContainer />}/>
                    <Route path='/newPost' element={<SettingsContainer />}/>
                    <Route path='/home' element={<HomeContainer />}/>
                    <Route path='/activity' element={<Music />}/>
                    <Route path='/users' element={<UsersContainer />}/>
                </Routes>
            </div>

            <HeaderContainer />
        </div>
    );

}


export default App;