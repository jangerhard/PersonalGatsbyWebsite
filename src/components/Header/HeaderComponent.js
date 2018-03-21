import React from 'react'
import style from './HeaderComponent.module.css'
import Button from '../Common/Button';

const Header = () => (

    <div className={style.header}>
        <div className={style.bringToTop}>

        </div>
        <div className={style.links}>

            <Button to="/" name="Home" flat={true} />
            <Button to="/sauces/" name="Sauces" flat={true} />

        </div>
    </div>
);

export default Header
