import React from "react";
import PropTypes from 'prop-types'
import styles from './CardInfo.module.css'

const CardInfo = ({title, text}) => (
    <div className={styles.card_info}>
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
);

CardInfo.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default CardInfo;