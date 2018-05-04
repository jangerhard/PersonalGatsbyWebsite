import React from 'react'
import PropTypes from 'prop-types';
import style from './Background.module.css'
import background from '../../images/background.svg'

const Background = ({children}) => (
    <div
        className={style.background}
        style={{
            backgroundImage: `url(${background})`
        }}>
        {children}
    </div>
);

Background.propTypes = {
    children: PropTypes.array
};

export default Background;
