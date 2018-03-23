import React from "react";
import styles from './CardPage.module.css'

const CardPage = ({title, text}) => {
    return (
        <div className={styles.card_info}>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
};

export default CardPage;