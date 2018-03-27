import PropTypes from 'prop-types'
import React, { Component } from "react";
import styles from './CardPage.module.css';

class CardPage extends Component {

    render() {
        return (
            <div className={styles.card}>
                <div className={styles.card_top}>
                    <h1 className={styles.display1}> {this.props.title}</h1>
                </div>

                {this.props.title && <hr />}

                {this.props.text}

                {this.props.imgLink &&
                <div className={styles.card_image}>
                    <img className={styles.img}
                         src={this.props.imgLink} />
                </div>
                }

                {this.props.cardInfo}
            </div>);
    }
}

CardPage.propTypes = {
    title: PropTypes.string.isRequired,
    imgLink: PropTypes.string,
    text: PropTypes.string,
    cardInfo: PropTypes.object,
};

export default CardPage;