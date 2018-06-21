import React from "react";
import styles from './ContactPage.module.css'
import CardPage from "../../Common/CardPage";
import CardInfo from "../../Common/CardInfo";

const ContactPage = () => (
    <div className={styles.page}>
        <CardPage title={"Get in touch!"} width={800}>
            <div className={styles.info}>
                <CardInfo title={"Gmail"} text={"jgschoepp"}/>
                <CardInfo title={"Call my cell"} text={"+47 480 20 857"}/>
            </div>
        </CardPage>
    </div>
);

export default ContactPage;