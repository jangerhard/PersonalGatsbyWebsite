import React from "react";
import styles from './CardPage.module.css';

const CardPage = ({ title, imgLink }) => {
    return (
        <div className={styles.card}>
            <div className={styles.card_top}>
                <h1 className={styles.display1}>{title}</h1>
            </div>

            <hr />

            {imgLink &&
            <div className={styles.card_image}>
                <img className={styles.img}
                     src={imgLink} />
            </div>
            }

            {this.props.children()}
        </div>);
};


export default CardPage;