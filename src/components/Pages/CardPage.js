import React from "react";
import styles from './CardPage.module.css';

const CardPage = ({title, imgLink}) => {
    return (
        <div className={styles.card}>
            <div className={styles.card_top}>
                <h1 className={styles.display1}>{title}</h1>
            </div>

            <hr/>

            <div className={styles.card_image}>
                <img className={styles.img}
                     src={imgLink}/>
            </div>
            <div className={styles.card_info}>
                <h2>Humble beginnings</h2>
                <p>
                    Nori grape silver beet broccoli kombu beet greens fava
                    bean potato quandong celery. Bunya nuts black-eyed pea
                    prairie turnip leek lentil turnip greens parsnip. Sea
                    lettuce lettuce water chestnut eggplant winter purslane
                    fennel azuki bean earthnut pea sierra leone bologi leek
                    soko chicory celtuce parsley jícama salsify.
                </p>
            </div>
        </div>);
};


export default CardPage;