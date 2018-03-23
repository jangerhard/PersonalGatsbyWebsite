import React from 'react'
import style from './SVGText.module.css'

const SVGText = ({text}) => (

    <svg className={style.svg}>
        <text x={30} y={40} className={style.text}>
            {text}
        </text>
    </svg>

);

export default SVGText;