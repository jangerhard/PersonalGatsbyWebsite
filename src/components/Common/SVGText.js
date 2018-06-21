import React from 'react'
import style from './SVGText.module.css'
import PropTypes from "prop-types";

const SVGText = ({text}) => (

    <svg className={style.svg}>
        <text x={30} y={40} className={style.text}>
            {text}
        </text>
    </svg>

);

SVGText.propTypes = {
    text: PropTypes.string
};

export default SVGText;