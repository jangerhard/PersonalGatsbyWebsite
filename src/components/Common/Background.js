import React from 'react'
import PropTypes from 'prop-types';
import style from './Background.module.css'
import background from '../../images/background.svg'

const Background = ({children}) => {
    return (
        <div
            className={style.background}
            style={{
                backgroundImage: `url(${background})`
            }}>
            {children}
        </div>
    );
};

Background.propTypes = {
    children: PropTypes.object
};

export default Background;
