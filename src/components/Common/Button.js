import React from 'react'
import style from './Button.module.css'
import Link from 'gatsby-link';

const BorderedButton = ({href, to, name, thin}) => {

    if (to !== null) {

        if (thin===true) {
            return (
                <Link to={to} className={style.link} data-ripple="true">
                    {name}
                </Link>
            );
        }
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
