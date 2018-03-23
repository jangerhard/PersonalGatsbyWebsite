import React from "react";
import PropTypes from 'prop-types'
import styles from './CardInfo.module.css'

const CardInfo = () => (
    <div className={styles.card_info}>
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
    </div>
);

CardInfo.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default CardInfo;