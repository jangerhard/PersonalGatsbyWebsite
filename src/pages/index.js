import React from 'react';
import style from './index.module.css';

export default () => (

    <div className={style.layout}>
        <div className={style.logoCircle}/>

        <div className={style.text}>
            <svg >
                <text x={25} y={40} className={style.svgText}>
                    Jan Schøpp
                </text>
            </svg>
            <h2>Full Stack Developer based in Oslo, Norway</h2>
        </div>
    </div>


);
