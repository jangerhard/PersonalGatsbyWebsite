import React from 'react'
import style from './FlatButton.module.css'
import Link from 'gatsby-link';

const FlatButton = ({to, name}) => (

    <Link to={to} className={style.link} data-ripple="true">
        {name}
    </Link>

);

export default FlatButton;
