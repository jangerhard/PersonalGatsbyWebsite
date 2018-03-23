import React from "react";
import PropTypes from 'prop-types'
import styles from './CardInfo.module.css'

class CardInfo extends React.Component {
    render() {
        return (
            <div className={styles.card_info}>
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

CardInfo.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
};

export default CardInfo;