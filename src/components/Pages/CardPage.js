import React, {Component} from "react";
import PropTypes from 'prop-types'
import styles from './CardPage.module.css';
import CardInfo from "./CardInfo";

class CardPage extends Component {

    render() {
        return (
            <div className={styles.card}>
                <div className={styles.card_top}>
                    <h1 className={styles.display1}> {this.props.title}</h1>
                </div>

                <hr/>

                {this.props.imgLink &&
                <div className={styles.card_image}>
                    <img className={styles.img}
                         src={this.props.imgLink}/>
                </div>
                }

                {this.props.cardInfo}
            </div>);
    }
}

CardPage.propTypes = {
    title: PropTypes.string,
    imgLink: PropTypes.string,
    cardInfo: PropTypes.instanceOf(CardInfo),
};

export default CardPage;