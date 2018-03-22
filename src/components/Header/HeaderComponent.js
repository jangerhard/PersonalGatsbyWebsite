import React from 'react'
import style from './HeaderComponent.module.css'
import FlatButton from '../Common/FlatButton';
import Link, {withPrefix}  from 'gatsby-link';

const Header = ({location}) => {

    const isHomePage = location.pathname === withPrefix("/");

    return (

        <div className={style.header}>

            {!isHomePage && <Link to="/" className={style.homeLogo}/>}
            {isHomePage && <div className={style.emptyDiv}/>}

            <div className={style.links}>

                <FlatButton to="/sauces/" name="Projects"/>
                <FlatButton to="/education/" name="Education"/>
                <FlatButton to="/sauces/" name="Career"/>

            </div>
        </div>
    );
};

export default Header
