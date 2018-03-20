import React from 'react'
import style from './HeaderComponent.module.css'
import FlatButton from '../Common/FlatButton';

const Header = () => (

    <div className={style.header}>
        <div className={style.bringToTop}>

        </div>
        <div className={style.links}>

            <FlatButton to="/" name="Home" />
            <FlatButton to="/sauces/" name="Sauces" />

        </div>
    </div>
);

export default Header
