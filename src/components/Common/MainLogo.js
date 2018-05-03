import React from "react";
import PropTypes from 'prop-types'
import style from './MainLogo.module.css'

const MainLogo = ({size}) => (
    <div className={`${style.logoCircle} mainLogo`} style={{
        width: size,
        height: size
    }}/>
);

MainLogo.propTypes = {
    size: PropTypes.number,
};

export default MainLogo;