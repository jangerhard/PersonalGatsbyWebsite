import React from 'react'
import style from './BorderedButton.module.css'
import Link from 'gatsby-link';

const BorderedButton = ({href, to, name}) => {

    if (to != null) {
        return (
            <Link to={to} className={style.largeButton} data-ripple="true">
                <h3 className={style.text}>
                    {name}
                </h3>
            </Link>
        );
    } else {
        return (
            <a href={href} className={style.largeButton} data-ripple="true">
                <h3 className={style.text}>
                    {name}
                </h3>
            </a>
        );
    }
};

export default BorderedButton;
