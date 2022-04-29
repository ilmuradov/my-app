import React from 'react';
import classes from './Header.module.css';
import logo from '../../assets/images/instagram.png';
import NavbarContainer from "../Navbar/NavbarContainer";

const Header = (props) => {
    return (
        <div className={props.night ? classes.container : classes.container__day}>
            <div className={classes.navbar_container}>
                <div className={classes.navbar_subcontainer}>
                    <NavbarContainer photo={props.photo} isFetching={props.isFetching}/>
                </div>
            </div>
        </div>
    )
}

export default Header;