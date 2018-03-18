import React from 'react';
import style from './index.module.css';
import Link from 'gatsby-link';

export default () => (

    <div className={style.layout}>
        <div className={style.logoCircle}/>

        <div className={style.text}>
            <svg>
                <text x={25} y={40} className={style.svgText}>
                    Jan Schøpp
                </text>
            </svg>
            <h2>Full Stack Developer based in Oslo, Norway</h2>
        </div>
        <div className={style.buttons}>
            <a href="https://www.linkedin.com/in/jangschoepp/" className={style.largeButton} data-ripple="true">
                <h3>
                    LinkedIn
                </h3>
            </a>
            <Link to="/sauces/" className={style.largeButton} data-ripple="true">
                <h3>
                    Sauces
                </h3>
            </Link>
        </div>
    </div>


);
