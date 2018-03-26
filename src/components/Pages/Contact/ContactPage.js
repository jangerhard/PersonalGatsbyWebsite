import React from "react";
import styles from './ContactPage.module.css'
import CardPage from "../../Common/CardPage";
import CardInfo from "../../Common/CardInfo";

class ContactPage extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <CardPage
                    title={"Get in touch!"}
                    cardInfo={
                        <div className={styles.info}>
                            <CardInfo title={"Gmail"} text={"jgschoepp"}/>
                            <CardInfo title={"Call me"}
                                      text={"+47 480 20 857"}/>
                        </div>
                    }>
                </CardPage>
            </div>
        )
    }
}

ContactPage.propTypes = {};

export default ContactPage;