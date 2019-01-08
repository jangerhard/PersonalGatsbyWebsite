import React, {Component} from 'react'
import style from './HeaderComponent.module.css'
import FlatButton from '../Common/FlatButton';
import Link, {withPrefix} from 'gatsby-link';
import MainLogo from "../Common/MainLogo";

const Header = () => {

    let isHomePage = typeof window !== 'undefined'
        && window.location.pathname === withPrefix("/");

    return (

        <div className={style.header}>

            {!isHomePage ? (
                <Link to="/">
                    <MainLogo size={70}/>
                </Link>
            ) : (
                <div className={style.emptyDiv}/>
            )}

            <div className={style.links}>

                <FlatButton to="/education/" name="Education"/>
                <FlatButton to="/contact/" name="Contact"/>
                <FlatButton to="/projects/" name="Projects"/>

            </div>
        </div>
    );
};

export default Header
