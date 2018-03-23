import React from "react";
import styles from './CardInfo.module.css'

const CardInfo = () => (
    <div className={styles.card_info}>
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
    </div>
);

CardInfo.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
};

export default CardInfo;