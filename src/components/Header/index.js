import React from 'react'
import style from './index.module.css'
import Link from 'gatsby-link';

const Header = () => (

    <div className={style.header}>
        <div className={style.bringToTop}>

        </div>
        <div className={style.links}>

            <Link to="/sauces/" className={style.link} data-ripple="true">
                <div className={style.button}>
                    Sauces
                </div>
            </Link>
        </div>
    </div>
);

export default Header
