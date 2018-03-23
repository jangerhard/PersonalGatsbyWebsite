import React from "react";
import styles from './CardInfo.module.css'

const CardInfo = ({title, text}) => {
    return (
        <div className={styles.card_info}>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
};

export default CardInfo;