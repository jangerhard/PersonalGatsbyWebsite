import React from 'react'
import style from './HeaderComponent.module.css'
import FlatButton from '../Common/FlatButton';
import Link from 'gatsby-link';

const Header = () => (

    <div className={style.header}>

        <Link to="/" className={style.homeLogo}/>

        <div className={style.links}>

            <FlatButton to="/sauces/" name="Projects"/>
            <FlatButton to="/sauces/" name="Education"/>
            <FlatButton to="/sauces/" name="Career"/>

        </div>
    </div>
);

export default Header
