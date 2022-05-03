import React from 'react';
import classes from './Header.module.css';
import Navbar from '../Navbar/Navbar';

const Header = (props) => {
    return (
        <div className={props.night ? classes.container : classes.container__day}>
            <div className={classes.navbar_container}>
                <div className={classes.navbar_subcontainer}>
                    <Navbar toggleHome={props.toggleHome} photo={props.photo} 
                            isFetching={props.isFetching} toggleMessages={props.toggleMessages}
                            toggleAddNew={props.toggleAddNew} toggleExplore={props.toggleExplore}
                            toggleLikes={props.toggleLikes} toggleProfile={props.toggleProfile} 
                            home={props.home} messages={props.messages}
                            addNew={props.addNew} explore={props.explore}
                            likes={props.likes} profile={props.profile}
                            night={props.night} />
                </div>
            </div>
        </div>
    )
}

export default Header;