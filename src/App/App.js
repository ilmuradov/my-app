import classes from './App.module.css';
import {Routes, Route} from "react-router-dom";
import {connect} from "react-redux";
import Music from '../components/Music/Music';
import UsersContainer from '../components/Users/UsersContainer';
import ProfileContainer from "../components/Profile/ProfileContainer";
import HeaderContainer from "../components/Header/HeaderContainer";
import HomeContainer from "../components/Home/HomeContainer";
import SettingsContainer from "../components/Settings/SettingsContainer";
import MessagesContainer from "../components/Messages/MessagesContainer";

const App = (props) => {

    return (
        <>
            {
                props.night ?
                    <div className={classes.app_wrapper__night}>
                        <div className={classes.app_wrapper__content}>
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
                :
                    <div className={classes.app_wrapper__day}>
                        <div className={classes.app_wrapper__content}>
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
            }
        </>
    );

}


const mapStateToProps = (state) => ({
    night: state.settings.night
})

export default connect (mapStateToProps, {}) (App);